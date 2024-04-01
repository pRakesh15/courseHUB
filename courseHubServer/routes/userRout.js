import express from "express";
import {
  addToPlaylist,
  changePassword,
  createUser,
  deleteFromList,
  forgetPassword,
  getAllusers,
  getMyprofile,
  logOutUser,
  loginUser,
  resetPassword,
  updateEmailOrName,
  updateProfilePic,
} from "../controllers/userController.js";
import { isAuthenticate } from "../middlewares/auth.js";
import singleUplode from "../middlewares/multer.js";

const router = express.Router();
router.route("/getAllUsers").get(getAllusers);
router.route("/createUser").post(singleUplode,createUser);
router.route("/LoginUser").post(loginUser);
router.route("/logOut").get(logOutUser);
router.route("/getMyProfile").get(isAuthenticate, getMyprofile);
router.route("/changePassword").put(isAuthenticate, changePassword);
router.route("/updateProfileDetails").put(isAuthenticate, updateEmailOrName);
router.route("/updatePofilePicture").put(isAuthenticate,singleUplode,updateProfilePic);
router.route("/forgetPassword").post(forgetPassword);
router.route("/ResetPassword/:token").put(resetPassword);
router.route("/addTOplayLIST").post(isAuthenticate, addToPlaylist);
router.route("/removeFromPlaylist/:id").put(isAuthenticate, deleteFromList);

export default router;
