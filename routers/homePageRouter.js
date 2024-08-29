const express = require("express");
const controller = require("../controllers/homepagecontroller");
const router = express.Router();

router.get("/", controller.getAllhomepage);
router.patch("/", controller.updatehome);
router.patch('/:id', controller.updatehome);
router.patch('/services/:id', controller.updateService); // Update service
router.patch('/projects/:id', controller.updateProject);

module.exports = router;
