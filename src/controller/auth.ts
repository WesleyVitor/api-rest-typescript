import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';

const login = (req:Request, res:Response)=>{
    const user = req.body;
    if (!(user.username == 'breno' && user.password == '123')){
        res.status(404).json({msg:"Login Inválido"})
        
    }
    const id = user.id;
    try {
      const token = jwt.sign({ id }, "123", { expiresIn: 300 });
      res
        .status(200)
        .json({ msg: "Autenticação realizada com sucesso", token })
    } catch (error) {
      res.status(500).json({ msg: error });
    }
}

const logout = ({}: Request, res: Response) => {
    //req.headers["authorization"] = undefined;
    res.json({msg:"Usuário deslogado com sucesso!"}).removeHeader("authorization");

};



export const authController = {
    login,
    logout
}