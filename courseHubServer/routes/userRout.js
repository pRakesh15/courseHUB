import express from "express";
import { changePassword, createUser, getAllusers, getMyprofile, logOutUser, loginUser, updateEmailOrName } from "../controllers/userController.js";
import { isAuthenticate } from "../middlewares/auth.js";

const router=express.Router();

router.route("/getAllUsers").get(getAllusers);
router.route("/createUser").post(createUser);
router.route("/LoginUser").post(loginUser);
router.route("/logOut").get(logOutUser);
router.route("/getMyProfile").get(isAuthenticate,getMyprofile);
router.route("/changePassword").put(isAuthenticate,changePassword);
router.route("/updateProfileDetails").put(isAuthenticate,updateEmailOrName);

export default router;