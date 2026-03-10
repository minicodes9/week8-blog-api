const express = require('express');

const multer = require("multer");
const {
    registerUser,
    loginUser,
} = require('../controllers/user.controller.js');

const {
    validateRegister,
    validateLogin
} = require('../validations/user.validation.js');

const upload = require('../middlewares/upload.js');

const router = express.Router();

router.post('/upload', upload.single('image'), (req, res) => {
    const fileUrl = req.file.path;
    const fileName = req.file.filename;

    console.log(fileName)
    console.log(fileUrl);
    
    res.send('Ohayo, from upload');
});

router.post('/sign-up', validateRegister, registerUser);
router.post('/login', validateLogin, loginUser);

module.exports = router;