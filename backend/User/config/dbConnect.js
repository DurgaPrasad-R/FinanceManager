const mongoose = require("mongoose");
require("dotenv").config();

// credentials
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_CLUSTER = process.env.MONGO_CLUSTER;
const MONGO_DBNAME = process.env.MONGO_DBNAME;
mongoose
  .connect(
    `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.jywzgq9.mongodb.net/${MONGO_DBNAME}`
  )
  .then(() => console.log(`Connected to: ${mongoose.connection.name}`))
  .catch((err) => console.log(err));

module.exports = mongoose;
