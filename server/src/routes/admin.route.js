import express from 'express'
import { createAdminController, loginController } from '../controllers/admin.controller.js'

const route = express.Router()


route.post('/login', loginController)
route.post('/create-admin', createAdminController)

export default route