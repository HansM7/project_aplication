import mongoose from "mongoose"
import { userSchema } from "../models/user.model.js"
import { instaceConnection } from "../config/connectionbd.js"

const schema = mongoose.model('user', userSchema)

export default class UserService{

    constructor(){

        this.verifyId = function async(id){
            if(id.length<30 || !id){
                return {
                    error: true,
                    message: 'Invalid ID'
                }
            }
        }
    }

    async getUsers(){
        try {
            await instaceConnection()
            const users = await schema.find({})
            return users
        } catch (error) {console.log(error)}
    }

    async getUserById(id){
        try {
            await instaceConnection()
            const user = await schema.findOne({'id':id})
            if(!user){
                return {
                    error: true,
                    message: 'User not found'
                }
            }
            return user
        }
        catch(error) {console.log(error)}
    }

    async deleteUser(id){
        try {
            this.verifyId(id)
            await instaceConnection()
            const user_v = await this.getUserById(id)
            if(user_v.error){ return user_v}
            
            await schema.deleteOne({'id':id})
            return {
                success: true,
                message: 'User deleted successfully'
            }
        } catch (error) {console.log(error)}
    }

    async editUser(id,user){
        try {
            this.verifyId(id)
            await instaceConnection()
            const user_v = await this.getUserById(id)
            if(user_v.error){ return user_v}
            
            await schema.updateOne({'id':id},user)
            return {
                success: true,
                message: 'User edited successfully'
            }
        } catch (error) {console.log(error)}
    }

    async createUser(data){
        try {
            const {name,email,level} = data
            if(!name || !email || !level){
                return {
                    error: true,
                    message: "Error, datos incompletos"
                }
            }
            const newUser={name,email,level }
            await instaceConnection()
            await schema.create(newUser)
            return {
                success: true,
                message: 'User created successfully'
            }
        } catch (error) {console.log(error)}
    }

    async getUserForUsername(name){
        try {
            await instaceConnection()

            const users = await schema.find({"name": { $regex: name, $options: 'i' } })
            return users
        } catch (error) {console.log(error)}
    }
    

}