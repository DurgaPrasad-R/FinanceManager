const express = require("express");
const cors = require("cors");
const axios = require("axios");

// import few middlewares
const { jwtCheck, fetchUserInfo } = require("./middleware/middleware");

const app = express();

// middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/protected", jwtCheck, fetchUserInfo, (req, res) => {
  res.send(req.user);
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const msg = error.message || "Internal Server Error";
  res.status(status).send(msg);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
