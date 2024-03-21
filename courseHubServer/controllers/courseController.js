import { catchError } from "../middlewares/chatchError.js";
import { Course } from "../models/CourseModal.js"
import ErrorHendler from '../utils/errorHendler.js'


//function for get all courses..
export const getAllCourses=catchError(async(req,res,next)=>
{
 const courses=await Course.find().select("-lectures");
 res.status(200).json({
    success:true,
    courses,
 })
});
//function for create course
export const creeateCourse=catchError(async(req,res,next)=>
{
   const {title,description,category,createdBy}=req.body;
   if(!title || !description || !category || !createdBy) return next(new ErrorHendler("plz fill all the field",400));
   // const file=req.file;

   await Course.create({
      title,
      description,
      category,
      createdBy,
      poster:{
         public_id:"temporary",
         url:"www.temp.com"
      }
   })

   res.status(200).json({
      success:true,
      message:"Course created !!"
   })
})