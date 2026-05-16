const mongoose = require('mongoose');

const dbSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    }
})

const dbModel = new mongoose.model("user", dbSchema);

module.exports=dbModel;