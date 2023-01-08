import express from 'express'
import { loginController } from '../controllers/admin.controller.js'

const route = express.Router()


route.post('/login', loginController)

export default route