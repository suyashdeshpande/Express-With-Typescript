import { Router,Request,Response } from 'express';
import { Person } from 'models/person';
const route = Router();

let teachers:Person[] = [
    {name: 'Prateek'},
    {name: 'Arnav'}
]

route.get('/',(req,res)=>{
    res.send(teachers)
    
})

route.get('/:id',(req:Request,res:Response)=>{
    res.send(teachers[parseInt(req.params.id)].name)
})


export{route}