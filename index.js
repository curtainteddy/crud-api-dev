const express = require ('express');
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());

mongoose.set('strictQuery', false);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},(err)=>{
    if(!err)
    {
        console.log("MongoDB Connection Succeeded.")
    }
    else 
    {
        console.log("Error in DB connection: " + err);
    }
});

app.listen(6969, () => console.log("Server started at port : 6969"));

