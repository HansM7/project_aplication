import mongoose from "mongoose"

export const instaceConnection = async()=>{
    mongoose.set('strictQuery', false)
    const URL ='mongodb://127.0.0.1:27017/project_user'
    let rta= mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}