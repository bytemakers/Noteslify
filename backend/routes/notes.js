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
            await theNote.update({ isDeleted: true });
            return res.status(200).json({ success: "Note Moved to Bin" });
        }
        else {
            return res.status(403).json({ error: "You can not delete the note of some other user." });
        }


    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});



// Route 3: Deleting an existing note: DELETE: http://localhost:8181/api/notes/deletenotepermanently/:id. Login Required
router.delete('/deletenotepermanently/:id', fetchuser, async (req, res) => {
    try {
        const theUser = await UserSchema.findById(req.user.id);
        const theNote = await NoteSchema.findById(req.params.id);

        if (!theNote) {
            return res.status(403).json({ error: "This note doesn't exist" });
        }

        if(theNote.authorId === theUser.id) {
            await theNote.delete();
            return res.status(200).json({ success: "Successfully Deleted the Note Permanently" });
        }
        else {
            console.log(theNote.authorId);
            console.log(theUser.id);
            return res.status(403).json({ error: "You cannot delete the note of some other user." });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
})




// Route 4: Getting all user specific notes: GET: http://localhost:8181/api/notes/getallnotes. Login Required
router.get('/getallnotes', fetchuser, async (req, res) => {
    try {
        const allNotes = await NoteSchema.find({ authorId: req.user.id, isDeleted: false }).sort({ createdAt: -1 });
        res.status(200).json(allNotes);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});




// Route 5: Getting A Single User Specific Note: GET: http://localhost:8181/api/notes/getnote/:id. Login Required
router.get('/getnote/:id', fetchuser, async (req, res) => {
    try {
        const theNote = await NoteSchema.findById(req.params.id);

        if (theNote.authorId !== req.user.id) {
            return res.status(403).json({ error: "You cannot access some other user's notes" });
        }
        res.status(200).json(theNote);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});




// Route 6: Updating Note: GET: http://localhost:8181/api/notes/updatenote/:id. Login Required
router.put('/updatenote/:id', fetchuser, [
    body('title', "Title cannot be blank.").isLength({ min: 1 }),
    body('description', "Description cannot be black.").isLength({ min: 1 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const theNote = await NoteSchema.findById(req.params.id);

        if (theNote.authorId !== req.user.id) {
            return res.status(403).json({ error: "You cannot access some other user's notes" });
        }
        
        const newNote = await NoteSchema.findByIdAndUpdate(req.params.id, { title: req.body.title, description: req.body.description });

        res.status(200).json({ success: "The Note has been Updated Successfully!" })

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});



// ROUTE 7: Getting all the deleted notes: GET : http://localhost:8181/api/notes/bin. Login Required!!
router.get('/bin', fetchuser, async (req, res) => {
    try {
        const allDeletedNotes = await NoteSchema.find({ authorId: req.user.id, isDeleted: true });
        return res.status(200).json(allDeletedNotes);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});








// ROUTE 8: Unarchiving a Note: PUT : http://localhost:8181/api/notes/unarchive/:id. Login Required!!
router.put('/unarchive/:id', fetchuser, async (req, res) => {
    try {

        const theNote = await NoteSchema.findById(req.params.id);
        if (theNote.authorId === req.user.id) {
            // This note belongs to this user...
            await theNote.update({ isDeleted: false });
            res.status(200).json({ success: "Successfully Unarchived the Note!!" })
        }
        else {
            // This note doesn't belongs to this user...
            return res.status(403).json({ error: "Unauthorized Access" });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }

});



// Route 9: Searching for notes indexed using their title and description: GET: http://localhost:8181/api/notes/search/:query. Login Required.
router.get('/search/:query', fetchuser, async (req, res) => {
    const notesRegex = new RegExp(req.params.query, 'i');

    const searchedNotes = await NoteSchema.find({ $and: [
        { $or: [
            { title: notesRegex },
            { description: notesRegex }
        ] },
        { authorId: req.user.id },
        { isDeleted: false }
    ] });

    res.json(searchedNotes);
});

// ROUTE 8: Searching for a note: GET : http://localhost:8181/api/notes/search/:searchText. Login Required!!
router.get('/search/:searchText', fetchuser, async (req, res) => {
    const caseInsensitiveMatch = new RegExp(req.params.searchText, 'i')

    const result = await NoteSchema.find({
        $and: [
            {
                $or: [
                    { title: caseInsensitiveMatch },
                    { description: caseInsensitiveMatch }
                ]
            },
            { authorId: req.user.id },
            { isDeleted: false }
        ]
    })

    return res.json(result)
})

module.exports = router;