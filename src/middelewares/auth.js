const { User } = require("../models/user");
const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
  try {
    const cookies = req.cookies;
    const { token } = cookies;

    if (!token) {
      return res.status(401).send("Please Login!");
    }

    const decodedToken = await jwt.verify(token, "Dev@2343$90");
    const { _id } = decodedToken;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("user not found");
    }

    // attaching the user to req
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};

module.exports = { userAuth };
