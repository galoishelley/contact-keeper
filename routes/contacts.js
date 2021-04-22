const express = require('express');
const router = express.Router();


//@route Get api/contacts
//@desc get all users contacts
//@access Public
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

//@route Post api/contacts
//@desc add new contacts
//@access Private
router.post('/', (req, res) => {
    res.send('Add contacts');
});

//@route DELTE api/contacts
//@desc delete contact
//@access Private
router.delete('/:id', (req, res) => {
    res.send('delete contacts');
});

//@route PUT api/contacts
//@desc Update contact
//@access Private
router.put('/:id', (req, res) => {
    res.send('Update contacts');
});


module.exports = router;