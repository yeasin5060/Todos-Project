import express from "express";
import cors from "cors";
import cookieparser from "cookie-parser";
import userrouter from './routes/user.route.js'
import createroute from './routes/todo.route.js'

const app = express()

app.use(express.json({limit:"30kb"}))
app.use(express.urlencoded({limit:"20kb" , extended:true}))


app.use(cors({
    origin:"*"
}))

app.use(cookieparser())
app.use("/api/v1/users",userrouter)
app.use ("/api/v1/todos",createroute)
export{app}