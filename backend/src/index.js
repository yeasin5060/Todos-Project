import { app } from "./app.js";
import { dbCannect } from "./db/index.js";
  
const port = process.env.PORT || 5000


dbCannect()

app.listen(port , ()=>{
    console.log("server is running")
})