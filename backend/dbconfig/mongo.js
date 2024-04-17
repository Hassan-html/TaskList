const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function mongoConn() {
  try {
    const connect = await mongoose.connect(process.env.mongoUrl);
    console.log("connected");
  } catch (error) {
    console.log("error in dbConfig connecting to mongo: " + error);
  }
}

module.exports = { connMongo: mongoConn };
