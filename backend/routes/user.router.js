import { Router } from "express";
import { login, signUp } from "../controllers/user.contollers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { createProfile } from "../controllers/profile.controllers.js";
import authMiddleware from "../middlewares/auth.js";

const userRouter = Router();

userRouter.post("/register", signUp);
userRouter.post("/login", login);
userRouter.post("/profile", authMiddleware, upload.single("profilePhoto"), createProfile);

export default userRouter;