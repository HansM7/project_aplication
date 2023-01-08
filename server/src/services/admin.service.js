import mongoose from "mongoose"
import { instaceConnection } from "../config/connectionbd.js"
import { adminSchema } from "../models/admin.schema.js"


const schema = mongoose.model('adminv', adminSchema)

export default class AdminService{

    async verifyUser(data){
        try {
            await instaceConnection()
            const {username,password} = data
            const user = await schema.findOne({username: username,password: password})
            if(user) return {username: user.username,password: user.password}
            else return {
                message: 'Incorrect username or password',
                error:true
            }
        } catch (error){console.log(error)}
    }


    // temporal register
    async createUser(data){
        try {
            await instaceConnection()
            const user = await schema.create(data)
            return user
        } catch (error){
            console.log(error)
        }
    }
    

}