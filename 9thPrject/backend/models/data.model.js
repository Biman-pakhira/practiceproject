const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: String,
    description: String
});

const todoModel = mongoose.model("notes", dataSchema);
module.exports=todoModel;