import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },

        email: {
            type: String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },

        fullName: {
            type: String,
            required:true,
            trim:true,
            index:true
        },

        avatar:{
            type:String, // cloudnary url
            required:true
        },

        coverImage: {
            type: String,  //cloudnary url
        },

        watchHistory: [
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],

        password:{
            type:String,
            required:[true, "Password is required"]
        },

        refreshToken: {
            type:String
        }

    }, {timestamps:true}
)

export const User = mongoose.model("User", UserSchema)

