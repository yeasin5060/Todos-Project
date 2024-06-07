import {Router} from "express"
import { register, totos } from "../controllers/user.controller.js"

const router = Router()

router.route("/register").post(register)
router.route("/todos").post(totos)
export default router