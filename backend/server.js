const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) =>{
  res.send("gebrehiwot and muller js")

  });

  app.post('/gebre',(req,res)=>{
    res.send('gebre file')
  })
  app.delete('/gebre/:id',(req,res)=>{
    res.send('successfully deleted')
  })
  app.patch('/:id',(req,res)=>{
   res.send('correctly updated') 
  })

  app.listen(port, 
  () =>{
  console.log(`server is running on port : ${port}`)
    })