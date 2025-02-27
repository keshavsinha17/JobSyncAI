import { Schema } from "mongoose";

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    image:{
        type:String,
        
    }
});

export const User = mongoose.model('User', UserSchema)