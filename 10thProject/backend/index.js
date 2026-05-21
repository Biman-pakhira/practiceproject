const express = require('express');
const app = express();
const authRouter = require('./routes/authRouter')
app.get("/",(req,res)=>{
    res.send("helllo world")
})
app.use("/auth", authRouter);
app.listen(3000, ()=>{
    console.log("app is running on port 3000");
    
})