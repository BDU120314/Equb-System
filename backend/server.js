const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) =>{
  res.send("gebrehiwot and muller js")

  });

  app.post('/gebre',(req,res)=>{
    res.send('gebre file')
  })

  app.listen(port, 
  () =>{
  console.log(`server is running on port : ${port}`)
    })