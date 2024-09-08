import { patientModel } from "../model/patient.js";

const addPatient=(req,res)=>{
    const {patientName,CNICNumber,disease,age,gender,status,bloodGroup}=req.body;
    const newPatient=new patientModel({
        patientName,
        CNICNumber,
        disease,
        age,
        gender,
        status,
        bloodGroup,
    })
    newPatient.save().then(result=>{
        if(result){
            res.status(201).send(result)
        }
    })
}

const getPatientData=(req,res)=>{
    patientModel.find().then(results=>{
        if(results){
            res.status(200).send(results)
        }
    })
}

const getSingleData=(req,res)=>{
    const {id}=req.params
    patientModel.findOne({_id:id}).then(data=>{
        if(!data){
            res.status(400).send('unable to find')
        }else{
            res.status(201).send(data)
        }
    })
}

const updatePatientData=(req,res)=>{
    const {id}=req.params;
    const query={$set:req.body}
    patientModel.findByIdAndUpdate(id,query).then(update=>{
        if(update){
            res.status(201).send({
                message:'properly updated',
                update,
            })
        }
    })
}

const deletePatient=(req,res)=>{
    const {id}=req.params;
    const query=({$set:req.body})
    patientModel.findByIdAndDelete(id,query).then(patient=>{
        if(patient){
            res.status(200).send('data properly deleted')
        }
    })
}

export default {
    addPatient,
    getPatientData,
    getSingleData,
    updatePatientData,
    deletePatient,
}