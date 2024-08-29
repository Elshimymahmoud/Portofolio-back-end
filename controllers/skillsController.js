const Skills = require("../models/SkillsModel");

exports.getAllskills = async (req, res) => {
  try {
    const skills = await Skills.find();
    res.status(200).json({
      data: skills,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.updateSkill = async (req, res) => {
  try {
    const skill = await Skills.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json({
      data: skill,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getSkillById = async (req, res) => {
    try {
      const skill = await Skills.findById(req.params.id)
      res.status(200).json({
        data: skill,
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
};

exports.createSkill = async (req, res) => {
    try {
      const skill = await Skills.create(req.body);
      res.status(200).json({
        data: skill,
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
};

exports.deleteSkill = async (req, res) => {
    try {
      await Skills.findByIdAndDelete(req.params.id);
      res.status(200).json({
        msg: 'Skill deleted',
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
};
