const express = require('express')
import{ route as teacherRoute } from './routes/teacher';
import {route as studentRoute } from './routes/students';
import { Application } from 'express-serve-static-core';
import { ExpressGA } from 'express-ga-middleware';

const app:Application = express()
const expGa = ExpressGA('UA-91824691-1');

app.get('/',expGa.event({
    category:'myevent',
    label:'mylabel',
    value:10,
    action:'action'
}),(req,res)=>{
    res.send("Hello World")
})


app.use('/students',studentRoute)
app.use('/teachers',teacherRoute)

app.listen(1234,()=>console.log("Server started at http://localhost:1234"))