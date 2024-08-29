const app = require("./app");
const multer = require("multer");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://hkop9530:hkop301020@elshimy.g5cvl.mongodb.net/my-portofilio?retryWrites=true&w=majority&appName=Elshimy")
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log("Connection error:", err);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/images", upload.single("file"), (req, res) => {
  res.status(200).json({
    filepath: `images/${req.file.filename}`,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
