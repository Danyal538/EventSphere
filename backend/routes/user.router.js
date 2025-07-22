import { Router } from "express";
import { login, signUp } from "../controllers/user.contollers.js";

const userRouter = Router();

userRouter.post("/register", signUp);
userRouter.post("/login", login)

export default userRouter;