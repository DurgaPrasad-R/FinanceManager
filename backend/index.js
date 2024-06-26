const express = require("express");
const cors = require("cors");
const { auth } = require("express-oauth2-jwt-bearer");
const axios = require("axios");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const jwtCheck = auth({
  audience: "this is my identifier for manager",
  issuerBaseURL: "https://dev-loyju480o4046tdd.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

const fetchUserInfo = async (req, res, next) => {
  const accessToken = req.headers.authorization.split(" ")[1];

  try {
    const response = await axios.get(
      "https://dev-loyju480o4046tdd.us.auth0.com/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    req.user = response.data;
    next();
  } catch (error) {
    console.error("Error fetching user info:", error.message);
    res.status(500).send("Failed to fetch user info");
  }
};

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
