import mongoose from "mongoose";

const sourceSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    keyConcepts:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Source = mongoose.model("Source", sourceSchema);

export default Source;