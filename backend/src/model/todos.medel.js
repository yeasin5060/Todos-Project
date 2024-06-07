import mongoose , {Schema} from "mongoose";

const todosSchema = new Schema({
    title : {
        type : String,
        require : true,
        trim : true,
    },
    description: {
        type : String,
        require : true,
        trim : true,
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
},{
    timestamps : true
})

export const Todos = mongoose.model.Todos ?? mongoose.model("Todos" , todosSchema)