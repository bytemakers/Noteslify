const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const UserSchema = require('../models/User');
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const GitHubStrategy = require('passport-github').Strategy;
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oidc');
const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require('uuid');
const fpSchema = require('../models/ForgotPassword');

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;



router.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
    },
  })
);



router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    cb(null, id);
});


// Route 1: Registering A New User: POST: http://localhost:8181/api/auth/register. No Login Required
router.post('/register', [
    body('email', "Please Enter a Vaild Email").isEmail(),
    body('username', "Username should be at least 4 characters.").isLength({ min: 4 }),
    body('password', "Password Should Be At Least 8 Characters.").isLength({ min: 8 }),
], async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const checkMultipleUsers1 = await UserSchema.findOne({ email: req.body.email });
        if (checkMultipleUsers1) {
            return res.status(403).json({ error: "A User with this email address already exists" });
        }

        const checkMultipleUsers2 = await UserSchema.findOne({ username: req.body.username });
        if (checkMultipleUsers2) {
            return res.status(403).json({ error: "A User with this username already exists" });
        }
        
        var salt = await bcrypt.genSalt(10);
        var hash = await bcrypt.hash(req.body.password, salt);
        const newUser = await UserSchema.create({
            email: req.body.email,
            username: req.body.username,
            password: hash,
        });

        let payload = {
            user: {
                id: newUser.id
            }
        }

        const authtoken = jwt.sign(payload, JWT_SECRET);
        res.json({ authtoken });

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});










// Route 2: Authenticating an existing user: POST: http://localhost:8181/api/auth/login. No Login Required
router.post('/login', [
    body('username', "Username should be at least 4 characters.").isLength({ min: 4 }),
    body('password', "Password Should Be At Least 8 Characters.").isLength({ min: 8 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    try {
        const theUser = await UserSchema.findOne({ username: req.body.username });
        if (theUser) {
            // console.log(checkEmailExists);
            let checkHash = await bcrypt.compare(req.body.password, theUser.password);
            if (checkHash) {
                let payload = {
                    user: {
                        id: theUser.id
                    }
                }
                const authtoken = jwt.sign(payload, JWT_SECRET);
                return res.status(200).json({authtoken});
            }
            else {
                return res.status(403).json({ error: "Invalid Credentials" });
            }
        }
        else {
            return res.status(403).json({ error: "Invalid Credentials" });
        }


    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});



    // GITHUB AUTHENTICATION (START)



// Using Passport Middleware
passport.use(new GitHubStrategy({
    clientID: process.env.clientId,
    clientSecret: process.env.clientSecret,
    callbackURL: "http://localhost:8181/api/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ githubId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
   cb(null, profile); 
  }
));



// Route 3: Authenticating using GitHub: GET: http://localhost:8181/api/auth/github. No Login Required
router.get('/github',
  passport.authenticate('github'));



// Route 4: Doing Things after GitHub authentication: GET: http://localhost:8181/api/auth/github/callback. No Login Required
router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  async function(req, res) {

    const theUser = await UserSchema.findOne({ username: req.user._json.login });
    if (theUser) {
        let payload = {
            user: {
                id: theUser.id
            }
        }
        const authtoken = jwt.sign(payload, JWT_SECRET);
        // Successful authentication, redirect home.
        res.redirect(`http://localhost:3000/setauthtoken/${authtoken}`);
    }
    else {
        var salt = await bcrypt.genSalt(10);
        var hash = await bcrypt.hash(process.env.DefaultGitHubPassword, salt);
        const newUser = await UserSchema.create({
            email: `${req.user._json.login}@gmail.com`,
            username: req.user._json.login,
            password: hash,
        });

        let payload = {
            user: {
                id: newUser.id
            }
        }

        const authtoken = jwt.sign(payload, JWT_SECRET);
        // Successful authentication, redirect home.
        res.redirect(`http://localhost:3000/setauthtoken/${authtoken}`);
    }
});



    // GITHUB AUTHENTICATION (END)

    

    // GOOGLE AUTHENTICATION (START)

    passport.use(new GoogleStrategy({
        clientID: process.env.GoogleClientId,
        clientSecret: process.env.GoogleClientSecret,
        callbackURL: 'http://localhost:8181/api/auth/google/callback'
      },
      function(issuer, profile, cb) {
        cb(null, profile);
      }
    ));


    router.get('/google', passport.authenticate('google', {
        scope: [ 'email' ]
    }));

    router.get('/google/callback',
        passport.authenticate('google', { failureRedirect: '/login', failureMessage: true }),
        async function(req, res) {

            const email = req.user.emails[0].value;
            const theUser = await UserSchema.findOne({ email: email });

            if (theUser) {
                let payload = {
                    user: {
                        id: theUser.id
                    }
                }
                const authtoken = jwt.sign(payload, JWT_SECRET);
                // Successful authentication, redirect home.
                res.redirect(`http://localhost:3000/setauthtoken/${authtoken}`);
            }
            else {
                var salt = await bcrypt.genSalt(10);
                var hash = await bcrypt.hash(process.env.DefaultGitHubPassword, salt);
                const newUser = await UserSchema.create({
                    email: email,
                    username: `${email}__username`,
                    password: hash,
                });

                let payload = {
                    user: {
                        id: newUser.id
                    }
                }

                const authtoken = jwt.sign(payload, JWT_SECRET);
                // Successful authentication, redirect home.
                res.redirect(`http://localhost:3000/setauthtoken/${authtoken}`);
            }
    });

    // GOOGLE AUTHENTICATION (END)







// Route 6: Forgot Password: POST: http://localhost:8181/api/auth/forgotpassword. No Login Required
router.post('/forgotpassword', [
    body('email', "Please Enter correct Email Address.").isEmail(),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const theUser = await UserSchema.findOne({ email: req.body.email });

    if (!theUser) {
        return res.status(404).json({ error: "This Email is not Registered!!" });
    }


    // If the user exists, create a new token and send the mail

    // Generating a new token
    const fpToken = uuidv4();
    
    // Pushing the token with email in the DB
    fpSchema.create({
        email: req.body.email,
        token: fpToken
    });
    


    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: process.env.outlookEmail,
            pass: process.env.outlookPassword
        }
    });

    const options = {
        from: process.env.outlookEmail,
        to: req.body.email,
        subject: 'Reset Password for Noteslify',
        html: `We have received Noteslify Password Reset request from your Email Id\nIf it was not you, ignore this email. If you wanna reset your password, <a href='http://localhost:3000/resetpassword/${req.body.email}/${fpToken}'>Click Here</a>`
    };

    transporter.sendMail(options, (err, info) => {
        if (err) {
            return res.status(400).json({ error: "Internal Server Error!" });
            console.log(error);
        }
        console.log(info.response);

        return res.status(200).json({ success: "Email sent successfully!!" });
    })


});

module.exports = router;