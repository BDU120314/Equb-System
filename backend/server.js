const express = require("express");
const routes = require('./Routes/router');
const cors =require("cors")
const app = express();

const port = process.env.PORT || 5000;
//middleware
app.use(cors())

// routes
app.use(express.json())
app.use("/api/v1/users", routes);


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