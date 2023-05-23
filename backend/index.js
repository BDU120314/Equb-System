
const express = require("express");
require("dotenv").config();
const routes = require('./Routes/router');
const connectToDB = require("./config/db_config");

const cors=require('cors');//
const app = express();


//calling the function or running the function
connectToDB();
//middleware
app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// routes

app.use("/api/v1/users", routes);
module.exports=app;