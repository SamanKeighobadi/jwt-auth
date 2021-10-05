const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Hello Postman",
  });
});

app.post("/api/posts", (req, res) => {
  res.json({
    message: "Post Created...",
  });
});

app.post('/api/login',(req,res) => {
    const user = {
        id:1,username:'Saman',
        email:'saman.keighobadi@gmail.com'
    }

    jwt.sign({user:user},'secret_Key',(err,token) => {
        
    })

})

app.listen(5000, () => console.log("server run "));
