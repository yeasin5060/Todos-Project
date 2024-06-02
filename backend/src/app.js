import express from "express";
import cors from "cors"
import cookieparser from "cookie-parser"


const app = express()

app.use(express.json({limit:"30kb"}))
app.use(express.urlencoded({limit:"20kb" , extended:true}))


app.use(cors({
    origin:"*"
}))

app.use(cookieparser())

export{app}