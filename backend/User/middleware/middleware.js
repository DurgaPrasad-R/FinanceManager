const { auth } = require("express-oauth2-jwt-bearer");

const jwtCheck = auth({
  audience: "this is my identifier for manager",
  issuerBaseURL: "https://dev-loyju480o4046tdd.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

const fetchUserInfo = async (req, res, next) => {
  // used to set the user info in the request object
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

module.exports = { jwtCheck, fetchUserInfo };
