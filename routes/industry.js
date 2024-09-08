import industries from '../controller/industries.js'
import express from 'express'

const industryRouter=express.Router()
industryRouter.post('/',industries.createIndustry)
industryRouter.get('/get',industries.getIndustry)
industryRouter.put('/:id/update',industries.createIndustry)
industryRouter.delete('/del',industries.deleteIndustries)

export default industryRouter;