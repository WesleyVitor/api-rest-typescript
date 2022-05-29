import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';

const login = (req:Request, res:Response)=>{
    const user = req.body;
    if (user.username == 'breno' && user.password == '123'){
        //const secret = process.env.SECRET;
        const id = user.id;
        const token = jwt.sign({id}, '123', {expiresIn:300});
        res.json({auth:true, token})
    }

    res.status(500).json({msg:'Login Invalid'})
}



export const authController = {
    login
}