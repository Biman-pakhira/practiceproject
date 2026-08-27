const express = require("express");
const path=require('path')
const app = express();
app.listen(3000,()=>{
    console.log("App is running on port 3000");
})
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"in.html"),(err)=>{
        if(err) console.error(err);
        
    })
})