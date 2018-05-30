import { Router } from 'express';
const route = Router();

let teachers = [
    {name: 'Prateek'},
    {name: 'Arnav'}
]

route.get('/',(req,res)=>{
    res.send(teachers)
    
})


export{route}