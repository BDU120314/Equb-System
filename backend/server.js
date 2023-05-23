
require("dotenv").config();
const app = require(".");

const port=process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});

module.exports = app;
