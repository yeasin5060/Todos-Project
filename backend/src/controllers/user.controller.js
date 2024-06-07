import bcrypt from "bcrypt"
import { User } from "../model/user.model.js"
import { Todos } from "../model/todos.medel.js"

const register = async ( req , res)=>{
    const {name , email , password} = req.body
    if([name , email , password].some((field) => field ?. trim () == "")){
        res.send("sob deo")
    }else{
        const hashPassword = await bcrypt.hash(password , 10)
        const user = await User.create({name : name , email : email , password : hashPassword})
        const user2 = await User.findById(user._id).select("-password")
        res.json({message : "register done" , user2})
    }
}

const totos = async ( rep , res) => {
    const {title , description , user } = rep.body
    if([title , description , user].some((field) => field ?.trim () == "")){
        res.send("sob lagbe")
    }else{
        const todo = await Todos.create({title : title , description : description , user : user})
        res.json({message : "todos create done" , todo})
    }
}
export {register , totos}