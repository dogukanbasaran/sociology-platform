import Source from "../models/source.model.js";

export const getSources = (req, res) => {
    Source.find()
    .then(sources => res.json(sources))
    .catch(err => res.json(err))
}

export const createSource = async (req, res) => {
    const {
        title,
        keyConcepts,
        content,
        author
    } = req.body;

    const newSource = new Source({
        title,
        keyConcepts,
        content,
        author
    });

    try{
        await newSource.save();
        res.status(201).json({message: "Source is created successfully."});
    }catch(error){
        console.log(error);
    }
}