require('dotenv').config();
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL; 
const connectDb=async()=>{
    try {
        const DBConnection = await mongoose.connect(
          "mongodb+srv://mulukendemis44:vLJVxyUh6ZtBNf3Y@equbcluster.lscxndg.mongodb.net/",
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        );
        console.log(" CONENECTED to mango databese ");
    } catch (error) {
        console.log(error)
    }
  
}
module.exports = connectDb;