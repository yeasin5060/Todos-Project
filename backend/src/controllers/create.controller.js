import { Todos } from "../model/todos.medel.js"

const todos = async( req , res ) => {
    const { title ,  description} = req.body

    if([title ,  description].some((field) => field ?.trim() == "")){
        res.json({ message : "sob lagbe"})
    }else{
        let todos = await Todos.create( { title : title ,  description : description})
        res.json({ message : "todos create done" , todos})
    }
}
const getTodo = async (req,res) =>{
    const todo = Todos.find()
    res.json({message : 'todos get done' , data:todo })
}

export{todos , getTodo}