const express = require("express");
const authRouter = express.Router();

const { User } = require("../models/user");
const { validateSignUp, validateLogin } = require("../utils/validate");
const bcrypt = require("bcrypt");

authRouter.post("/signUp", async (req, res) => {
  try {
    // validate the data
    validateSignUp(req);

    // encrypt password
    const { firstName, lastName, email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);

    // store data to db
    const user = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    const token = await user.getJWT();

    //adding token to cookie and sending back to client with res
    res.cookie("token", token, {
      expires: new Date(Date.now() + 8 * 3600000),
    });

    await user.save();
    res.send(user);
  } catch (err) {
    res.status(400).send("Error in creating user: " + err.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    // validate data
    validateLogin(req);

    // finding the credentials matches the data
    const { email, password } = req.body;

    // finding email match from db
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("Invalid credential");
    }
    // comparing the password
    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      // creating a token
      const token = await user.getJWT();

      //adding token to cookie and sending back to client with res
      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });
      res.send(user);
    } else {
      throw new Error("Invalid credential");
    }
  } catch (err) {
    res.status(400).send("Error in login: " + err.message);
  }
});

authRouter.post("/logout", async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  });
  res.send("logout successfully");
});

module.exports = { authRouter };
