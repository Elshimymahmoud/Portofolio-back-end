const express = require('express');
const controller = require('../controllers/skillsController');

const router = express.Router();

router.route('/').get(controller.getAllskills).post(controller.createSkill)
router.route('/:id').get(controller.getSkillById).patch(controller.updateSkill).delete(controller.deleteSkill);

module.exports = router;