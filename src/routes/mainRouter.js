const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController.js")


router.get('/', mainController.index);
router.get('/aboutUs', mainController.aboutUs);
router.get('/contact', mainController.contact);


module.exports = router;
