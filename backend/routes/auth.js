const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const UserSchema = require('../models/User');
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;


// Route 1: Registering A New User: POST: http://localhost:5000/api/auth/register. No Login Required
router.post('/register', [
    body('email', "Please Enter a Vaild Email").isEmail(),
    body('username', "Username should be at least 3 characters.").isLength({ min: 3 }),
    body('password', "Password Should Be At Least 6 Characters.").isLength({ min: 6 }),
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










// Route 2: Authenticating an existing user: POST: http://localhost:5000/api/auth/login. No Login Required
router.post('/login', [
    body('username', "Username should be at least 3 characters.").isLength({ min: 3 }),
    body('password', "Password Should Be At Least 6 Characters.").isLength({ min: 6 }),
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


module.exports = router;