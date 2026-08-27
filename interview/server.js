const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json())
const note = []
app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`);
});
app.get('/',(req, res)=>{
    res.status(200).json({
        notes: note
    })
});
app.post("/n",(req,res)=>{
    const b = req.body;
    note.push(b)
    console.log(b);
    res.status(202).json({
        message: "created successfully",
        inserted: b
    })
})
app.delete("/:index",(req,res)=>{
    const idx = req.params.index;
    delete note[idx];
    res.json({
        message:"note deleted successfully"
    })
})

