const app = require(`./src/app`);
const connectDB = require(`./db/db`);
const dataModel = require(`./models/model.schema`);
const express = require('express');
const PORT = 8080;
const cors = require('cors')
app.use(express.json())
app.use(cors());
const a = [{
    name:"biman",
    roll: 23
},{
    name:"bimaaaaaaan",
    roll: 23
},{
    name:"gudddu",
    roll:3444
}]


app.post("/notes", async (req,res)=>{
    const dataa = req.body;
    await dataModel.create({
        name: dataa.name,
        description: dataa.description
    })
    res.status(201).json({
        message:"successfully created",

    })
})

app.get('/notes', async(req,res)=>{
    const node = await dataModel.find();

    res.status(200).json({
        message:"data fetched successfully",
        node
    })
})
app.listen(PORT, ()=>{
    console.log("App is Running on PORT ", PORT);
});
connectDB();