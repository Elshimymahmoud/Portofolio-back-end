const mongoose = require("mongoose");
const { type } = require("os");

const homepageSchema = new mongoose.Schema({
  mainTitle: {
    type: String,
    required: true,
  },

  proffessions: {
    type: [
      {
        title: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },

  servicesTitle: {
    type: String,
    required: true,
  },

  services: {
    type: [
      {
        title: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },

  projectsTitle: {
    type: String,
    required: true,
  },

  projects: {
    type: [
      {
        title: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },

  stats: {
    type: {
      totalProjects: {
        type: Number,
        required: true,
      },
      onGoing: {
        type: Number,
        required: true,
      },
      doneProjects: {
        type: Number,
        required: true,
      },
    },
    required: true,
  },

  links: {
    type: [
      {
        link: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },

  querySelector: {
    type: String,
    default: "home",
    select: false,
  },
});

const homepage = mongoose.model("homepage", homepageSchema);
module.exports = homepage;
