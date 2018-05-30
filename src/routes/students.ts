import { Router,Request,Response } from 'express';
const route = Router();

let students = [
    {name: 'Suyashk'},
    {name: 'Bill'}
]

route.get('/',(req: Request,res: Response)=>{
    res.send(students)
})


export{route}