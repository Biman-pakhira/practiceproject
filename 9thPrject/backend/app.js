const express = require('express');
const app=express();
const todoModel = require('./models/data.model');
const cors = require('cors')
app.use(express.json());
app.use(cors());
app.get("/post", async(req,res)=>{
    const note = await todoModel.find()
    res.json({
        message: note
    })
});

app.delete('/post/:id', async (req,res) => {
    const index = req.params.id
    await todoModel.findByIdAndDelete(index)
    res.status(200).json({
        message:"task successfully deleted"
    })
})

app.post('/post', async(req,res)=>{
    await todoModel.create({
        name: req.body.name,
        description: req.body.description
    })
    res.status(201).json({
        message:"node created successfully"
    })
})

module.exports=app;