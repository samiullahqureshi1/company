import logIn from '../controller/signIn.js';
import express from 'express'

const logInRouter=express.Router();
logInRouter.post('/ss',logIn)

export default logInRouter;