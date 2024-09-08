import tags from '../controller/tags.js';
import express from 'express'
const tagRouter=express.Router();
tagRouter.post('/',tags.addTag)

export default tagRouter;