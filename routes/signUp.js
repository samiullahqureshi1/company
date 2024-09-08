import signUp from '../controller/signUp.js'
import express from 'express';

const authRouter=express.Router();
authRouter.post('/',signUp.addUser)
authRouter.put('/:id/update',signUp.editUser)
authRouter.delete('/:id/del',signUp.deleteUser)

export default authRouter;