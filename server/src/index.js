import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import sourceRoutes from "./routes/source.route.js";


dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("Connected to database, successfully.")
})
.catch((err) => {
    console.log(err)
})

const app = express();
const port = 3002;

app.use(express.json());

app.use("/api/source", sourceRoutes);

app.listen(port,() => {
    console.log(`Server is started at ${port} port.`)
})