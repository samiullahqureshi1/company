import express from 'express';
import dotenv from 'dotenv';
import Router from './routes/router.js';
import { dbConnection } from './db_Connection.js';


const app =express();
dotenv.config();
dbConnection();
app.use(express.json())
app.use('/users',Router.signUp)
app.use('/logIn',Router.login)
app.use('/industries',Router.industry)
app.use('/tags',Router.tags)
app.use('/bloodBank',Router.bloodBank)
app.use('/bloodGroup',Router.bloodGroup)
app.use('/patient',Router.patient)
app.listen(6000,()=>{
    console.log('server connected on port 5000')
})