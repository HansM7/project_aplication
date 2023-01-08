import express from 'express'
import { createUserController, 
    deleteUserController, 
    editUserController, 
    getUserController, 
    getUserForUserNameController, 
    getUsersController} from '../controllers/user.controller.js'

const route = express.Router()

route.get('/user/:id', getUserController)
route.get('/users/', getUsersController)
route.get('/users/:name', getUserForUserNameController)
route.post('/create-user', createUserController)
route.put('/edit-user/:id', editUserController)
route.delete('/delete-user/:id', deleteUserController)


export default route