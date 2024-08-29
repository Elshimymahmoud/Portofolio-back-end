const mongoose = require("mongoose");

const aboutPageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  FirstDescription: {
    type: String,
    required: true,
  },
  SecondDescription: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  linkedIn: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  querySelector: {
    type: String,
    default: "about",
    select: false,
  },
});

const AboutPage = mongoose.model("AboutPage", aboutPageSchema);

module.exports = AboutPage;
