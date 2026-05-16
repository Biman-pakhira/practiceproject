const express = require('express');
const mongoose = require("mongoose");
const app=express();
const port =3000;


app.use(express.json());

app.listen(port, ()=>{
    console.log((`server is running on port ${port}`));
})

async function connectDB(){
    await mongoose.connect("mongodb+srv://Guddu:YaOcpRhFgzEtxSXU@guddu.pjthp5x.mongodb.net/heyyyh");
    console.log("dataBase Connected Successfully");
    
}
connectDB();
const dbSchema=mongoose.Schema({
    name:String,
    description:String
});

const model = new mongoose.model("user", dbSchema);




app.get("/users", async(req,res)=>{
    const reqq=await model.find()
    res.json(reqq);
})

app.post("/users", (req,res)=>{
    const data = req.body;
    model.create({
        name: data.name,
        description: data.description
    })
    res.status(201).json({
        message: "created successfuly"
    })
})


app.delete("/users/:id", async (req,res)=>{
    const idx = req.params.id;
    const val = await model.findOneAndDelete({
        _id: idx
    })
    if(!val){
        return res.status(400).json({message:"usernotfound"})
    }

    res.status(200).json({
        message: "deleted successfuly"
    })
})





