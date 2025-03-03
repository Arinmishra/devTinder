const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://arinmishra2704:arin12345@cluster0.9wzof.mongodb.net/devTinder"
  );
};

module.exports = { connectDB };
