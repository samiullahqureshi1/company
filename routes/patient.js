import patient from '../controller/patient.js'
import express from 'express'
const patientRouter=express.Router()

patientRouter.post('/',patient.addPatient)
patientRouter.get('/getAll',patient.getPatientData)
patientRouter.get('/:id',patient.getSingleData)
patientRouter.put('/:id/update',patient.updatePatientData)
patientRouter.delete('/delete/:id',patient.deletePatient)
export default patientRouter;