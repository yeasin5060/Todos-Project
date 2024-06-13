import { Router } from "express";
import { todos } from "../controllers/create.controller.js";


const route = Router()

route.route("/create").post(todos)

export default route