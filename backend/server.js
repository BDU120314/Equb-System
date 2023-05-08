const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.get("/", 
(res, req) =>{
  res.send("server js")

  })

  app.listen(port, 
  () =>{
  console.log(`server is running on port : ${port}`)
    })