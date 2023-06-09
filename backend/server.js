const express = require("express");
require("dotenv").config();
const path = require("path");
const logInRouter = require("./Routes/logInRoute");
const signUpRouter = require("./Routes/signUpRoute");
const equbUserRoute = require("./Routes/equbUserRoute");
const equbGroupRouter = require("./Routes/equbGroupRoute");
const equbTypeRouter = require("./Routes/equbTypeRoute");
const groupMemberRouter = require("./Routes/groupMemberRoute");

const cors = require("cors");
const app = express();

const connectToDB = require("./config/db_config");

connectToDB();

app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const port = process.env.PORT || 5003;

app.use("/api/v1/login", logInRouter);
app.use("/api/v1/signup", signUpRouter);
app.use("/api/v1/users", equbUserRoute);
app.use("/api/v1/groups", equbGroupRouter);
app.use("/api/v1/types", equbTypeRouter);
app.use("/api/v1/members", groupMemberRouter);

app.listen(5003, () => {
  console.log(`server is running on port : 5003`);
});

module.exports = app;
