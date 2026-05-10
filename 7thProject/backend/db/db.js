const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect(`mongodb+srv://Guddu:YaOcpRhFgzEtxSXU@guddu.pjthp5x.mongodb.net/biman`);
    console.log("DataBase Connected");
}

module.exports = connectDB;