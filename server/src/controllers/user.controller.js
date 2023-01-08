import UserService from "../services/user.service.js"
const instanceUser = new UserService()

export const getUserController = async(req,res)=>{
    try{
        const user = await instanceUser.getUserById(req.params.id)
        if(user.error){
            res.status(400).json(user)
        }else res.status(200).json(user)
    }catch(e){
        res.status(500).json({error: e})
    }
}

export const getUsersController = async(req,res)=>{
    try {
        const users = await instanceUser.getUsers()
        res.status(200).json(users)
    } catch (error) { res.status(500).json({error: e})}
}

export const createUserController = async(req,res) =>{
    try {
        const user = req.body
        const register = await instanceUser.createUser(user)
        if (register.error) res.status(400).json(register)
        else res.status(200).json(register)
    } catch (error) {res.status(500).json({error: e})}
}

export const editUserController = async(req,res) =>{
    try {
        const user = req.body
        const id = req.params.id
        const edited = await instanceUser.editUser(id,user)

        if (edited.error) res.status(400).json(edited)
        else res.status(200).json(edited)
    } catch (error) {res.status(500).json({error: e})}
}

export const deleteUserController = async(req,res) =>{
    try {
        const id = req.params.id
        const deleted = await instanceUser.deleteUser(id)

        if (deleted.error) res.status(400).json(deleted)
        else res.status(200).json(deleted)
    } catch (error) {res.status(500).json({error: e})}
}

export const getUserForUserNameController = async(req,res) =>{
    try {
        const user = await instanceUser.getUserForUsername(req.params.name)
        res.status(200).json(user)
    } catch (error) {res.status(500).json({error: e})}
}