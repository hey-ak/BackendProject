import { Router } from "express";
import { registerUser } from "../controllers/user.controler.js";
import upload from "../middlewares/multer.middleware.js"
const router = Router();

router.route("/register").post(
    upload.fileds([
        {
            name:"avatar",
            maxcount:1
        },
        {
            name:"coverImage",
            maxcount:1,
        }
    ]),
    registerUser)



export default router;