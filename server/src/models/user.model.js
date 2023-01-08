import mongoose from "mongoose"
import { v4 as uuidv4 } from 'uuid'


export const userSchema = new mongoose.Schema({
    id:{
        type: String,
        default: uuidv4(),
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    status:{
        type: String,
        default: 'active'
    },
    level:{
        type: Number,
        required: true
    }
})