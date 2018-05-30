const express = require('express')
import{ route as teacherRoute } from './routes/teacher';
import {route as studentRoute } from './routes/students';

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.use('/students',studentRoute)
app.use('/teachers',teacherRoute)

app.listen(1234,()=>console.log("Server started at http://localhost:1234"))