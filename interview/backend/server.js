const app = require(`./src/app`);
const express = require("express")
const connnetDB = require(`./src/db/db`);
const dbModel = require(`./src/model/model.schema`)

const port = 3000;
app.use(express.json());
app.post("/users", async(req,res)=>{
    const userDetails = req.body;
    await dbModel.create({
        name:userDetails.name,
        email: userDetails.email
    })
    res.status(201).json({
        message: "Details Saved Successfully"
    })
});

app.get("/users", async(req,res)=>{
    const data = await dbModel.find();

    if(!data){
        res.status(404).json({
            message: "user not found"
        })
    }
    res.status(200).json(data);
})

app.listen(port, ()=>{
    console.log(`Server Is running on PORT ${port}`);
    
});

connnetDB();

