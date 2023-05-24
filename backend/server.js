const express = require("express");
const routes = require("./Routes/router");
const notificationRoute = require("./Routes/notificationRoute");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./model/equbUserModels");

const app = express();

const port = process.env.PORT || 5000;

mongoose.connect(
  port,
  {
    useNewUrlParser: true,
    useUnifiedToplogy: true,
  },
  (err) => {
    if (err) {
      console.log();
    } else {
      console.log("connected to database");
    }
  }
);

//middleware
app.use(cors());

// routes
app.use(express.json());
app.use("/api/v1/users", routes);
app.use("/notifications", notificationRoute);

app.listen(5000, () => {
  console.log(`server is running on port : ${port}`);
});

module.exports = app;
