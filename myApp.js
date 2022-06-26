var express = require('express');
var app = express();
require("dotenv").config();
console.log("Hello World");

app.get("/json",(req,res) => {

  let response = "Hello json"
  if(process.env.MESSAGE_STYLE === 'uppercase'){
      res.json({ message:response.toUpperCase() })
  }
  else{
    
    res.json({ message:response })
  }
  
});

app.get("/json/_api/use-env-vars",(req,res) => {

    let response = process.env.MESSAGE_STYLE;

    return res.json({"MESSAGE_STYLE":"uppercase" })
    
  });

  app.get(
    "/now",
    (req, res, next) => {
      req.time = new Date().toString();
      next();
    },
    (req, res) => {
      res.send({
        time: req.time
      });
    }
  );

 module.exports = app;
