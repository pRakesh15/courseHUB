import express from "express";
import { creeateCourse, getAllCourses } from "../controllers/courseController.js";

const router=express.Router();

router.route("/Allcourses").get(getAllCourses);
router.route("/createCourse").post(creeateCourse);


export default router;
