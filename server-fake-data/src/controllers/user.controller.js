import { v4 as uuid } from "uuid";
import fs from 'fs'
const dataUsers = fs.readFileSync('src/DB/users.json', 'utf-8');
let dataUsersJson=JSON.parse(dataUsers)


export const getUserController = async(req,res)=>{
    try{
        const user = dataUsersJson.filter((user)=>{
            if(user.id===id){ return user}
        })
        if(!user[0]){
            return {
                error: true,
                message: 'User not found'
            }
        }
        if(user[0].error){
            res.status(400).json(user[0])
        }else res.status(200).json(user[0])
    }catch(e){
        res.status(500).json({error: e})
    }
}

export const getUsersController = async(req,res)=>{
    try {
        const users = dataUsersJson
        res.status(200).json(users)
    } catch (error) { res.status(500).json({error: e})}
}

export const createUserController = async(req,res) =>{
    try {
        const user = req.body
        let register = null
        if(!user){ register={error:true}
        }else{register={success:true}}

        const userSet={
            ...user,id:uuid(),status:'active'
        }

        dataUsersJson.push(userSet)
        const jsonUser=JSON.stringify(dataUsersJson)
        fs.writeFileSync('src/DB/users.json', jsonUser, 'utf-8');

        if (register.error) res.status(400).json(register)
        else res.status(200).json(register)
    } catch (error) {res.status(500).json({error: e})}
}

export const editUserController = async(req,res) =>{
    try {
        const user = req.body
        const id = req.params.id
        let edited=null
        if(!user || !id){
            edited={error:true}
        }else{
            edited={success:true}
        }

        for (const key in dataUsersJson) {
            if(id===dataUsersJson[key].id){
                if(user.name)dataUsersJson[key].name=user.name
                if(user.email)dataUsersJson[key].email=user.email
                if(user.status)dataUsersJson[key].status=user.status
                if(user.level)dataUsersJson[key].level=user.level
            }
        }

        const jsonUser=JSON.stringify(dataUsersJson)
        fs.writeFileSync('src/DB/users.json', jsonUser, 'utf-8');

        if (edited.error) res.status(400).json(edited)
        else res.status(200).json(edited)
    } catch (error) {res.status(500).json({error: e})}
}

export const deleteUserController = async(req,res) =>{
    try {
        const id = req.params.id

        let deleted=null
        if(!id) deleted={error:true}
        else deleted={success:true}

        const dataSet=dataUsersJson.filter(user => user.id != req.params.id)
        
        const jsonUser=JSON.stringify(dataSet)
        fs.writeFileSync('src/DB/users.json', jsonUser, 'utf-8');

        if (deleted.error) res.status(400).json(deleted)
        else res.status(200).json(deleted)
    } catch (e) {res.status(500).json({error: e})}
}

export const getUserForUserNameController = async(req,res) =>{
    try {
        const dataSet=dataUsersJson.filter(user => user.name ===req.params.name)
        res.status(200).json(dataSet)
    } catch (e) {res.status(500).json({error: e})}
}