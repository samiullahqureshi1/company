import { tagModel } from "../model/tags.js";

const addTag=(req,res)=>{
    const {name ,description}=req.body;
    const tags=new tagModel({
        name, description,
    })
    tags.save().then(res.status(201).send(tags))
}


export default {
    addTag,
}