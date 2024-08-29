const About = require("../models/aboutpagemodel");

exports.getAboutData = async (req, res) => {
  try {
    const about = await About.find();
    res.status(200).json({
      data: about,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.updateAbout = async (req, res, next) => {
  try {
    const id = await About.findOne({ querySelector: "about" }).select("_id").lean();
    const about = await About.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!about) {
      return res.status(404).json({
        message: "About not found",
      });
    }
    res.status(200).json({
      data: about,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
