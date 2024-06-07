import mongoose from "mongoose"

const dbCannect = async ()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGODB_CONNECTION_URL)
       .then(()=>{
            console.log("MONGODB CONNECTION")
       })
    }catch(error){
        throw new error(error.message)
    }
}

export{dbCannect}