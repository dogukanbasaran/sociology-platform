import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("Connected to database, successfully.");
})
.catch((err) => {
    console.log(err)
});

const app = express();
const port = 3001;

app.listen((port, () => {
    console.log(`Server is started at ${port} port.`)
}))