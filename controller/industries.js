import { industryModel } from "../model/industries.js";


const createIndustry=(req,res)=>{
    const {name,description}=req.body;
    const industry=new industryModel({
        name,
        description,
    })
    industry.save().then(res.status(201).send(industry))
}

const getIndustry=(req,res)=>{
   industryModel.find().then(industry=>{
    res.status(201).send(industry)
   })
}

const updateIndustry=(req,res)=>{
    const {id}=req.params;
    const query={$set:req.body}
    industryModel.findByIdAndUpdate(id,query).then(result=>{
        if(result){
            res.status(201).send({
                message:'properly updated',
                result,
            })
        }
    })
}

const deleteIndustries=(req,res)=>{
    
    industryModel.deleteMany().then(result=>{
        if(result){
            res.status(201).send('successfully deleted')
        }
    })
}

export default {
    createIndustry,
    getIndustry,
    updateIndustry,
    deleteIndustries,
}
