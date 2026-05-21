const router = require('express').Router();
router.get("/test", (req,res)=>{
    res.send("test passtesd")
})
module.exports= router;