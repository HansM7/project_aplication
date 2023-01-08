
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import fs from 'fs'

const dataAdmin = fs.readFileSync('src/DB/admin.json', 'utf-8');
let dataAdminJson=JSON.parse(dataAdmin)

export const loginController = async(req,res)=>{
    try {

        const {username,password}=req.body
        if(username===dataAdminJson.username && password===dataAdminJson.password){
            const response={
                username,
                password
            }
            const token = jwt.sign(response,process.env.SECRET_KEY)
            
            res.status(200).json({response,token})
        }else{
            const response={
                error:true
            }
            res.status(400).json(response)
        }

    } catch (error) {console.log(error)}
}

