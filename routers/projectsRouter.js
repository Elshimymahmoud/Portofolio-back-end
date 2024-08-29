const express = require('express');
const controller = require('../controllers/projectscontroller');
const router = express.Router();
router.route('/').get(controller.getAllprojects).post(controller.createprojects)
router.route('/:id').get(controller.getprojectsById).patch(controller.updateprojects).delete(controller.deleteprojects);
module.exports = router;