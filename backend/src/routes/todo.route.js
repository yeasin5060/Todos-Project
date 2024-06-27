import { Router } from "express";
import { getTodo, todos } from "../controllers/create.controller.js";


const route = Router()

route.route("/create").post(todos)
route.route("/gettodos").get(getTodo)

export default route