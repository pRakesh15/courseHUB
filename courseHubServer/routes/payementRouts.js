import express from "express";
import { isAdminAuthenticate, isAuthenticate } from "../middlewares/auth.js";
import { buySubscription, deleteSubscribtion, getRazorPayKey, paymentVerification } from "../controllers/paymentController.js";

const router=express.Router();
router.route("/subscription").get(isAuthenticate,buySubscription);
router.route("/razorpaykey").get(getRazorPayKey)
router.route("/verifypament").post(isAuthenticate,paymentVerification);
router.route("/subscribe/cancel").delete(isAuthenticate,deleteSubscribtion)
export default router;