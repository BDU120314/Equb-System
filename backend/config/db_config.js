const mongoose = require("mongoose");

const MONGO_DB_URL = process.env.MONGO_DB_URL;
const connectToDB = async () => {
  try {
    const DBConnection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/equb",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

mongodb: console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDB;
