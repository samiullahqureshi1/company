import bloodBank from "../controller/bloodBank.js";
import express from 'express'
const bloodBankRouter=express.Router()

bloodBankRouter.post('/',bloodBank.addBloodBank)
bloodBankRouter.get('/getAll',bloodBank.getBloodBanks)
bloodBankRouter.get('/:id',bloodBank.getSingle)
bloodBankRouter.put('/:id/update',bloodBank.updateBloodBanks);

bloodBankRouter.get('/getAllLocation', bloodBank.getAllLocation);

export default bloodBankRouter;