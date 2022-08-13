const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const UserSchema = require('../models/User');
const NoteSchema = require('../models/Notes');
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;


// Route 1: Creating a new Note: POST: http://localhost:8181/api/notes/addnote. Login Required
router.post('/addnote', fetchuser, [
    body('title', "Title cannot be blank.").isLength({ min: 1 }),
    body('description', "Description cannot be black.").isLength({ min: 1 }),
], async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const theUser = await UserSchema.findById(req.user.id);

        const newNote = await NoteSchema.create({
            title: req.body.title,
            description: req.body.description,
            authorId: req.user.id,
            authorUsername: theUser.username
        });

        res.status(200).json(newNote);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});




// Route 2: Deleting an existing note: DELETE: http://localhost:8181/api/notes/deletenote/:id. Login Required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        const theUser = await UserSchema.findById(req.user.id);

        const theNote = await NoteSchema.findById(req.params.id);

        if (theNote.authorId === theUser.id) {
            await theNote.delete();
            return res.status(200).json({ success: "Successfully Deleted the Note" });
        }
        else {
            return res.status(403).json({ error: "You can not delete the note of some other user." });
        }


    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});




// Route 3: Getting all user specific notes: GET: http://localhost:8181/api/notes/getallnotes. Login Required
router.get('/getallnotes', fetchuser, async (req, res) => {
    try {
        const allNotes = await NoteSchema.find({ authorId: req.user.id });
        res.status(200).json(allNotes);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});


module.exports = router;