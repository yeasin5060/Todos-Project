import mongoose , {Schema} from "mongoose";

const userSchema = new Schema({
    name : {
        type : String,
        require : true,
        trim : true
    },
    email : {
        type : String,
        require : true,
        unique : true,
        lowercase : true,
        trim : true
    },
    password :{
        type : String,
        require : true,
    },
    todos : [
        {
            type : Schema.Types.ObjectId,
            ref : "Todos"
        }
    ]
},{
    timestamps : true
})

export const User = mongoose.model.User ?? mongoose.model("User" , userSchema)