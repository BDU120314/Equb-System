const express = require("express");
require("dotenv").config();
const path = require("path");
const routes = require("./Routes/router");
// const notificationRoute = require("./Routes/notificationRoute");
const cors = require("cors");
//const User = require("./model/equbUserModels");
const connectToDB = require("./config/db_config");

const app = express();

const port = process.env.PORT || 5001;

connectToDB();

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());

app.use("/api/v1/users", routes);
// app.use("/notifications", notificationRoute);

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});

module.exports = app;
