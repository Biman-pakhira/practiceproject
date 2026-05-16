const mongoose = require('mongoose');

const connnetDB = async()=>{
    await mongoose.connect("mongodb+srv://Guddu:YaOcpRhFgzEtxSXU@guddu.pjthp5x.mongodb.net/interview");
    console.log("database Connected successfully");
    
}

module.exports=connnetDB;