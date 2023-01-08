import express from 'express'
import routeAdmin from './src/routes/admin.route.js'
import routeUser from './src/routes/user.route.js'
import cors from 'cors'


const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.use('/', routeAdmin)
app.use('/', routeUser)

export default app

