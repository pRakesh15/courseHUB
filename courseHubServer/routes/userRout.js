import express from "express";
import { getAllusers } from "../controllers/userController.js";

const router=express.Router();

router.route("/getAllUsers").get(getAllusers);

export default router;