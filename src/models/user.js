const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid Email");
        }
      },
    },
    password: {
      type: String,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["Male", "Female", "Other"].includes(value)) {
          throw new Error("Gender data is not valid!");
        }
      },
    },
    about: {
      type: String,
      default: null,
    },
    skills: {
      type: [String],
      default: null,
    },
    photoURL: {
      type: String,
      default:
        "https://th.bing.com/th/id/R.103d6cfc4049a1efeefc7de13c000457?rik=ra5DxxC8BJzzGQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fProfile-PNG-Images.png&ehk=GxCPtrrQRA%2fNl2OoH8OJmULZT7bRu7lfS41FYOh0z3o%3d&risl=&pid=ImgRaw&r=0",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.getJWT = async function () {
  const token = await jwt.sign({ _id: this._id }, "Dev@2343$90", {
    expiresIn: "1d",
  });
  return token;
};

userSchema.methods.validatePassword = async function (password) {
  const isPasswordValid = await bcrypt.compare(password, this.password);
  return isPasswordValid;
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
