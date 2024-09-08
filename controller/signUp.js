import { userModel } from "../model/signUp.js";

const addUser=async(req,res)=>{
    const{firstName,lastName,email,password}=req.body;
    const user=new userModel({
        firstName,lastName,email,password
    })
    await user.save()
    .then((users)=>{
        if(users){
            res.status(201).send(users)
        }
    }).catch((err=>{
        res.status(404).send('unable to create')
    }))
}

const editUser=(req,res)=>{
    const {id}=req.params;
    const query={$set:req.body}
    userModel.findByIdAndUpdate(id,query).then(result=>{
        if(result){
            res.status(201).send({
                message:'properly updated',
                result,
            })
        }
    })
}
const deleteUser=(req,res)=>{
    const {id}=req.params
    const query ={$set:req.body}
    userModel.findByIdAndDelete(id,query).then(results=>{
        if(results){
            res.status(201).send({
                message:'properly deleted',
                results
            })
        }
    })
}


export default {
    addUser,
    editUser,
    deleteUser,
}