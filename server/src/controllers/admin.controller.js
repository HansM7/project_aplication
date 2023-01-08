import AdminService from "../services/admin.service.js"
const instanceAdmin = new AdminService()
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const loginController = async(req,res)=>{
    try {
        const response = await instanceAdmin.verifyUser(req.body)
        if(response.error) res.status(401).json(response)
        else{
            const token = jwt.sign(response,process.env.SECRET_KEY)
            res.status(200).json({response,token})
        }
    } catch (error) {console.log(error)}
}

export const createAdminController = async(req, res)=>{
    const response = await instanceAdmin.createUser(req.body)
    res.status(200).json(response)
}