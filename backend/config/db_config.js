const mongoose = require("mongoose");

const MONGO_DB_URL = process.env.MONGO_DB_URL;
const connectToDB = async () => {
  try {
<<<<<<< HEAD
    
    const DBConnection = await mongoose.connect(
      "mongodb+srv://mulukendemis44:vLJVxyUh6ZtBNf3Y@equbcluster.lscxndg.mongodb.net/",
=======
    const DBConnection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/equb",
>>>>>>> 9737bd2aaec414fe3d7f6cfca0e78e8e120b3867
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
