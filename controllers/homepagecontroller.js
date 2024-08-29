const Home = require("../models/homepagemodel");

exports.getAllhomepage = async (req, res) => {
  try {
    const home = await Home.find();
    res.status(200).json({
      data: home,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.updatehome = async (req, res) => {
  try {
    const homeDoc = await Home.findOne({ name: "home" }).exec();
    if (!homeDoc) {
      return res.status(404).json({
        message: "Home with name 'home' not found",
      });
    }

    const id = homeDoc._id;
    exports.updatehome = async (req, res) => {
      try {
        const id = req.params.id; // Get ID from URL parameters
        const updatedService = await Home.findOneAndUpdate(
          { "services._id": id },
          { $set: { "services.$": req.body } },
          { new: true, runValidators: true }
        );
    
        if (!updatedService) {
          return res.status(404).json({ message: "Service not found" });
        }
    
        res.status(200).json({ message: "Service updated successfully", data: updatedService });
      } catch (err) {
        console.error("Error updating service:", err);
        res.status(500).json({ message: "An error occurred while updating", error: err.message });
      }
    };
    if (!updatedHome) {
      return res.status(404).json({
        message: "Home with id " + id + " not found",
      });
    }

    res.status(200).json({
      message: "Home updated successfully",
      data: updatedHome,
    });
  } catch (err) {
    console.error("Error updating home:", err); 
    res.status(500).json({
      message: "An error occurred while updating the home",
      error: err.message,
    });
  }
}
exports.updateService = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the URL parameter
    console.log('Updating service with ID:', id); // Debug: Check if ID is received
    console.log('Request body:', req.body); // Debug: Verify the request body

    const updatedService = await Home.updateOne(
      { "services._id": id },
      { $set: { "services.$": req.body } }
    );

    if (updatedService.nModified === 0) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    res.status(200).json({
      message: "Service updated successfully",
      data: updatedService,
    });
  } catch (err) {
    console.error("Error updating service:", err); // Debug: Error logs
    res.status(500).json({
      message: "An error occurred while updating the service",
      error: err.message,
    });
  }
};

  exports.updateProject = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedProject = await Home.updateOne(
        { "projects._id": id },
        { $set: { "projects.$": req.body } }
      );
  
      if (updatedProject.nModified === 0) {
        return res.status(404).json({
          message: "Project not found",
        });
      }
  
      res.status(200).json({
        message: "Project updated successfully",
        data: updatedProject,
      });
    } catch (err) {
      res.status(500).json({
        message: "An error occurred while updating the project",
        error: err.message,
      });
    }
  };
