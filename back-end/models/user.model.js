import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type:String,
            required:true
        },
        email: {
            type:String,
            required:true
        },
        password: {
            type:String,
            require:true
        }
    }
)

const User = mongoose.model("User",userSchema)

export {User}