require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_DB = process.env.MONGODB_URL;


mongoose.connect(MONGO_DB) 
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((error) => {
    console.log("MongoDB connection error", error);
})