import express from "express";
import {
  addLecture,
  creeateCourse,
  deleteCourse,
  deleteLecture,
  getAllCourses,
  getLctureofCourse,
} from "../controllers/courseController.js";
import singleUplode from "../middlewares/multer.js";
import { isAdminAuthenticate, isAuthenticate } from "../middlewares/auth.js";

const router = express.Router();

router.route("/Allcourses").get(getAllCourses);
router
  .route("/createCourse")
  .post(isAuthenticate, isAdminAuthenticate, singleUplode, creeateCourse);
router
  .route("/course/:id")
  .get(isAuthenticate, getLctureofCourse)
  .post(isAuthenticate, isAdminAuthenticate, singleUplode, addLecture)
  .delete(isAuthenticate, isAdminAuthenticate, deleteCourse);
router
  .route("/lecture")
  .delete(isAuthenticate, isAdminAuthenticate, deleteLecture);

export default router;
