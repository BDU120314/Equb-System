const mongoose = require("mongoose");

const MONGO_DB_URL = process.env.MONGO_DB_URL;
const connectToDB = async () => {
  try {
    
    const DBConnection = await mongoose.connect(
      "mongodb+srv://mulukendemis44:vLJVxyUh6ZtBNf3Y@equbcluster.lscxndg.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDB;
