require("dotenv").config();

const express = require("express");
const { connectDB } = require("./config/database");
const cookieParser = require("cookie-parser");
const { authRouter } = require("./routes/auth");
const { profileRouter } = require("./routes/profile");
const { requestRouter } = require("./routes/request");
const { userRouter } = require("./routes/user");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", //fronotend url or origin
    credentials: true, //Allow cookies to be sent
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

connectDB()
  .then(() => {
    console.log("Database connected Successfully!");
    app.listen(process.env.PORT, () => {
      console.log("Server sucessfully listening on " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("cannot connect to Database");
  });
