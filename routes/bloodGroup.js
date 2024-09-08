import bloodGroup from '../controller/bloodGroup.js';
import express from 'express'

const bloodRouter=express.Router()
bloodRouter.post('/',bloodGroup.createBloodGroup)
bloodRouter.get('/new',bloodGroup.newGetBlood)

export default bloodRouter;