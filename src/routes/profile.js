const express = require("express");
const profileRouter = express.Router();

const { userAuth } = require("../middelewares/auth");
const { User } = require("../models/user");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (err) {
    res.status(400).send("Error: ", err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;
    const data = req.body;

    const allowedUpdates = [
      "firstName",
      "lastName",
      "password",
      "age",
      "gender",
      "about",
      "skills",
      "photoURL",
    ];

    const isAllowedupdates = Object.keys(data).every((k) =>
      allowedUpdates.includes(k)
    );
    if (!isAllowedupdates) {
      throw new Error("update not allowed");
    }

    const user = await User.findByIdAndUpdate(loggedInUser.id, data, {
      returnDocument: "after",
    });
    res.json({ message: "profile updated successfully", data: user });
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

module.exports = { profileRouter };
