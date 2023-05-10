const express = require("express");
const routes = require('./Routes/router');
const mongoose=require('mongoose');
const app = express();

const port = process.env.PORT || 5000;


// routes
app.use(express.json())
app.use("", routes);


  mongoose.connect("mongodb://localhost:27017/myEqub", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {

      //localhost:27017/
      // In 'mongodb://localhost:27017/Equb' Equb is the name of the database u are created in compass and
      // make sure the database u created are the same url as me;
      mongodb: console.log("mongo connected");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB", err);
    });

 
  app.listen(5000,
  () =>{
  console.log(`server is running on port : ${port}`)
    })