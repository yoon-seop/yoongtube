import express from "express";
import routes from "../routes";
import { users, userDetail, editProfile, changePassword } from "../controller/userController";

export const userRouter = express.Router();

userRouter.get("/", users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.chagePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;