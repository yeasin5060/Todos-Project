import {Router} from "express"
import { login, register, todos} from "../controllers/user.controller.js"

const router = Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/todo").post(todos)
export default router