const validator = require("validator");

const validateSignUp = (req) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("name is not valid");
  }
  if (!validator.isEmail(email)) {
    throw new Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error("Please provide a strong password");
  }
};

const validateLogin = (req) => {
  const { email, password } = req.body;

  if (!validator.isEmail(email)) {
    throw new Error("email not valid");
  }
};

module.exports = { validateSignUp, validateLogin };
