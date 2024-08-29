const projects = require("../models/projectsmodel");



exports.getAllprojects = async (req, res) => {
    try {
      const project = await projects.find();
      res.status(200).json({
        data: project,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  };
  
  exports.updateprojects = async (req, res) => {
    try {
      const project = await projects.findByIdAndUpdate(req.params.id, req.body, {
          new: true
      });
      res.status(200).json({
        data: project,
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  };
  
  exports.getprojectsById = async (req, res) => {
      try {
        const project = await projects.findById(req.params.id)
        res.status(200).json({
          data: project,
        });
      } catch (err) {
        res.status(400).json({
          message: err.message,
        });
      }
  };
  
  exports.createprojects = async (req, res) => {
      try {
        const project = await projects.create(req.body);
        res.status(200).json({
          data: project,
        });
      } catch (err) {
        res.status(400).json({
          message: err.message,
        });
      }
  };
  
  exports.deleteprojects = async (req, res) => {
      try {
        await projects.findByIdAndDelete(req.params.id);
        res.status(200).json({
          msg: 'projects deleted',
        });
      } catch (err) {
        res.status(400).json({
          message: err.message,
        });
      }
  };
  