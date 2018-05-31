import { Router,Request,Response } from 'express';
import { Person } from 'models/person';
const route = Router();

let students:Person[] = [
    {name: 'Suyashk'},
    {name: 'Bill'}
]

route.get('/',(req: Request,res: Response)=>{
    res.send(students)
})


export{route}