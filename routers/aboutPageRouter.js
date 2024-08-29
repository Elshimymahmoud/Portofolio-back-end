const express = require("express");
const controller = require("../controllers/aboutpagecontroller");
const router = express.Router();

router.get("/", controller.getAboutData);
router.patch("/", controller.updateAbout);

module.exports = router;
