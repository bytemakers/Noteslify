const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const UserSchema = require('../models/User');
const NotesSchema = require('../models/Notes');
const FolderSchema = require('../models/Folders');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const helper = require('../helper/helper')

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;


// Route 1: Creating a new Folder: POST: http://localhost:8181/api/folders/addFolder. Login Required
router.post('/addFolder', fetchuser, [
    body('title', "Title cannot be blank.").isLength({ min: 1 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let key = helper.getKey();
        req.body.title = helper.encrypt(req.body.title, key);

        const newFolder = await FolderSchema.create({
            title: req.body.title,
            authorId: req.user.id,
            secretKey: key
        });
        delete newFolder.secretKey;

        res.status(200).json({success : "New Folder Created"});

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});




// Route 2: Deleting an existing folder: DELETE: http://localhost:8181/api/folders/deleteFolder/:id. Login Required
router.delete('/deleteFolder/:id', fetchuser, async (req, res) => {
    try {
        const theUser = await UserSchema.findById(req.user.id);

        const theFolder = await FolderSchema.findById(req.params.id);

        if (theFolder.authorId === theUser.id) {
            await theFolder.update({ isDeleted: true });
            return res.status(200).json({ success: "Folder Deleted" });
        }
        else {
            return res.status(403).json({ error: "You can not delete the folder of some other user." });
        }


    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});






// Route 4: Getting all user specific folders: GET: http://localhost:8181/api/folders/getAllFolders. Login Required
router.get('/getAllFolders', fetchuser, async (req, res) => {
    try {
        const allFolders = await FolderSchema.find({ authorId: req.user.id, isDeleted: false }, { isDeleted: 0, notes: 0 })
            .sort({ createdAt: -1 });
        let foldersList = [];
        for (let index = 0; index < allFolders.length; index++) {
            const element = allFolders[index];
            element.title = helper.decrypt(element.title, element.secretKey);
            delete element.secretKey;
            foldersList.push({
                _id : element._id,
                title : element.title,
                notes : element.notes
            })
        }

        res.status(200).json(foldersList);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});




// Route 5: Getting A Single User Specific Folder: GET: http://localhost:8181/api/folders/getFolder/:id. Login Required
router.get('/getFolder/:id', fetchuser, async (req, res) => {
    try {
        const theFolder = await FolderSchema.findById(req.params.id).populate('notes');

        if (theFolder.authorId !== req.user.id) {
            return res.status(403).json({ error: "You cannot access some other user's folder" });
        }
        theFolder.title = helper.decrypt(theFolder.title, theFolder.secretKey);

        let folderData = {};
        folderData.title = theFolder.title;
        folderData.notes = [];
        for (let index = 0; index < theFolder.notes.length; index++) {
            const element = theFolder.notes[index];
            element.title =  helper.decrypt(element.title, element.secretKey);
            element.description =  helper.decrypt(element.description, element.secretKey);
            delete element.secretKey;
        }
        folderData.notes = theFolder.notes;
        
        res.status(200).json(folderData);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});




// Route 6: Updating Folder: GET: http://localhost:8181/api/folders/updateFolder/:id. Login Required
router.put('/updateFolder/:id', fetchuser, [
    body('title', "Title cannot be blank.").isLength({ min: 1 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const theFolder = await FolderSchema.findById(req.params.id);

        if (theFolder.authorId !== req.user.id) {
            return res.status(403).json({ error: "You cannot access some other user's notes" });
        }

        let key = helper.getKey();
        req.body.title = helper.encrypt(req.body.title, key);

        const newFolder = await FolderSchema.findByIdAndUpdate(req.params.id, { title: req.body.title, secretKey: key });

        res.status(200).json({ success: "The Folder has been Updated Successfully!" })

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});


// ROUTE 9: Searching for a folder: GET : http://localhost:8181/api/folders/search/:searchText. Login Required!!
router.get('/search/:searchText', fetchuser, async (req, res) => {
    const caseInsensitiveMatch = new RegExp(req.params.searchText, 'i')

    const result = await FolderSchema.find({
        $and: [
            {
                $or: [
                    { title: caseInsensitiveMatch },
                ]
            },
            { authorId: req.user.id },
            { isDeleted: false }
        ]
    })

    let resultList = [];
    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        element.title =  helper.decrypt(element.title, element.secretKey);
        delete element.secretKey;
        resultList.push(element);
    }
    return res.json(resultList)
})



// ROUTE 10: Add note in folder: GET : http://localhost:8181/api/folders/addNote. Login Required!!
router.post('/addNote', fetchuser, async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let theNote = NotesSchema.findById(req.body.noteId);
        if(theNote){
            const newFolder = await FolderSchema.updateOne({ _id: req.body.folderId, authorId: req.user.id }, { $push: { notes: req.body.noteId } });
            res.status(200).json({success : "Note added to folder successfully"});
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
        

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
})


// ROUTE 10: Remove note from folder: GET : http://localhost:8181/api/folders/removeNote. Login Required!!
router.get('/removeNote', fetchuser, async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let theNote = NotesSchema.findById(req.body.noteId);
        if(theNote){
            const newFolder = await FolderSchema.updateOne({ _id: req.body.folderId, authorId: req.user.id }, { $pull: { notes: req.body.noteId } });
            res.status(200).json({success : "Note Deleted"});
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
        

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
})

module.exports = router;