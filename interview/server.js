const express = require("express");

const app = express();
app.listen(3000,(req,res,err)=>{
    if(err) console.error(err);
    
    console.log("App is running on port 3000");
})