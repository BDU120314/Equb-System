const express = require("express");
const routes = require('./Routes/router');

const app = express();

const port = process.env.PORT || 5000;


// routes
app.use(express.json())
app.use("", routes);


  app.delete('/gebre/:id',(req,res)=>{
    res.send('successfully deleted')
  })
  app.patch('/:id',(req,res)=>{
   res.send('correctly updated') 
  })

 
  app.listen(5000,
  () =>{
  console.log(`server is running on port : ${port}`)
    })