const express = require('express');
const mongoose = require("mongoose");
const app=express();
const port =3000;
let a = [];

app.use(express.json());

app.listen(port, ()=>{
    console.log((`server is running on port ${port}`));
})

async function connectDB(){
    await mongoose.connect("mongodb+srv://Guddu:YaOcpRhFgzEtxSXU@guddu.pjthp5x.mongodb.net/");
    console.log("dataBase Connected Successfully");
    
}
connectDB();

app.get("/users", (req,res)=>{
    res.send(a);
})

app.post("/users", (req,res)=>{
    const data = req.body;
    a.push({
        id: data.id,
        description: data.description
    })
    res.status(201).json({
        message: "created successfuly"
    })
})


app.delete("/users/:id", (req,res)=>{
    const idx = req.params.id;
    a = a.filter((user)=> user.id!=idx);

    res.status(200).json({
        message: "deleted successfuly"
    })
})





