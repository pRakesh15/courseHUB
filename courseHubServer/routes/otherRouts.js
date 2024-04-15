import express from 'express';
import { isAdminAuthenticate, isAuthenticate } from '../middlewares/auth.js';
import { getDashBoardState } from '../controllers/otherController.js';

const router=express.Router();
router.route("/admin/state").get(isAuthenticate,isAdminAuthenticate,getDashBoardState)

export default router