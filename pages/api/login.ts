import type { NextApiRequest, NextApiResponse } from "next";

export default(
    req: NextApiRequest,
    res: NextApiResponse
)=>{
    if(req.method === 'POST'){
        const {login, senha} = req.body
        if(login === 'Admin@admin.com' && senha === 'Admin@123') {
            res.status(200).json({msg: 'Usuario autenticado com sucesso'})
        }
        return res.status(400).json({error: 'Usuario ou senha nao encontrados'})
    }
    return res.status(405).json({error: "informado nao e valido'}) 
}