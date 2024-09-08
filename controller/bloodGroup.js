import { bloodGroupModel } from "../model/bloodGroup.js";
const createBloodGroup=(req,res)=>{
 const {bloodGroupName,status,quantity,bloodBankId}=req.body
 const data=new bloodGroupModel({
    bloodGroupName,
    status,
    quantity,
    bloodBankId,
 })
 data.save().then(result=>{
    if(result){
        res.status(200).send(result)
    }
 })
}


const newGetBlood = (req, res) => {
    const { bloodGroupName } = req.query;
    console.log(bloodGroupName);

    // Create a case-insensitive regular expression pattern
    const regexPattern = new RegExp(bloodGroupName, 'i');

    // Define the aggregation pipeline
    const aggregationPipeline = [
        { 
            $match: { 
                bloodGroupName: { $regex: regexPattern } 
            } 
        },
        {
            $lookup: {
                from: 'bloodBanks', // The name of the blood bank collection
                localField: 'bloodBankId',
                foreignField: '_id',
                as: 'bloodBankDetails'
            }
        },
        {
            $unwind: '$bloodBankDetails' // Unwind the array to de-normalize
        }
    ];

    // Execute the aggregation pipeline
    bloodGroupModel.aggregate(aggregationPipeline)
        .then(result => {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).send('Unable to find blood group');
            }
        })
        .catch(error => {
            console.error('Error finding blood groups:', error);
            res.status(500).send('Internal Server Error');
        });
};


export default {
    createBloodGroup,
    newGetBlood,
} 