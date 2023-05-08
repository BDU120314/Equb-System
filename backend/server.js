const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req,res) =>{
  res.send("server js")

  });

  app.post("/muller",(req,res)=>{
res.send("muluken");
  });
  

  app.listen(port, 
  () =>{
  console.log(`server is running on port : ${port}`)
    })