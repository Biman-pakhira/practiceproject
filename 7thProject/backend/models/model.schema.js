const mongoose = require(`mongoose`);

const dataSchema = new mongoose.Schema({
    name: String,
    description: String
})

const dataModel = mongoose.model("note", dataSchema);

module.exports=dataModel;