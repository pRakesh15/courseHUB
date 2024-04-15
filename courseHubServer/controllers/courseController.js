import { catchError } from "../middlewares/chatchError.js";
import { Course } from "../models/CourseModal.js";
import { States } from "../models/Stats.js";
import getDataUri from "../utils/dataUri.js";
import ErrorHendler from "../utils/errorHendler.js";
import cloudinary from "cloudinary";

//function for get all courses..
export const getAllCourses = catchError(async (req, res, next) => {
  const keyword = req.query.keyword || "";
  const category = req.query.category || "";
  const courses = await Course.find({
    title: {
      $regex: keyword,
      $options: "i",
    },
    category: {
      $regex: category,
      $options: "i",
    },
  }).select("-lectures");
  res.status(200).json({
    success: true,
    courses,
  });
});
//function for create course
//NOTE ADE POSTER FROM FRONTEND BY USING CLOUDINARY
//IF POSSIBLE THEN IM GOING FOR S3
export const creeateCourse = catchError(async (req, res, next) => {
  const { title, description, category, createdBy } = req.body;
  if (!title || !description || !category || !createdBy)
    return next(new ErrorHendler("plz fill all the field", 400));
  const file = req.file;

  const fileUri = getDataUri(file);
  const mycloudFile = await cloudinary.v2.uploader.upload(fileUri.content);
  await Course.create({
    title,
    description,
    category,
    createdBy,
    poster: {
      public_id: mycloudFile.public_id,
      url: mycloudFile.secure_url,
    },
  });

  res.status(200).json({
    success: true,
    message: "Course created !!",
  });
});
//function for find the lecture of poticular course by ID
export const getLctureofCourse = catchError(async (req, res, next) => {
  const course = await Course.findById(req.params.id);
  if (!course) return next(new ErrorHendler("Course not found", 404));
  const lecturess = course.lectures;
  res.status(200).json({
    success: true,
    lecturess,
  });
});

//function for add lecture in a course
//NOTE*- ADD VIDEO FROM FRONTEND BY USING CLOUDINARY AND SAVE THE VIDEO URL IN DATABASE..
//FOR THIS IM USING AWS S3.
export const addLecture = catchError(async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;
  if (!title || !description)
    return next(new ErrorHendler("plz fill all the field", 400));

  const course = await Course.findById(id);
  if (!course) return next(new ErrorHendler("Course not found", 404));

  const file = req.file;

  const fileUri = getDataUri(file);
  const mycloudFile = await cloudinary.v2.uploader.upload(fileUri.content, {
    resource_type: "video",
  });

  const newLectureItem = {
    title: title,
    description: description,
    video: {
      public_id: mycloudFile.public_id,
      url: mycloudFile.secure_url,
    },
  };
  Course.updateOne({ _id: course.id }, { $push: { lectures: newLectureItem } })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Lecture added to the Course",
      });
    })
    .catch((error) => {
      res.status(200).json({
        success: true,
        message: error,
      });
    });
});

//function for delete course

export const deleteCourse = catchError(async (req, res, next) => {
  const { id } = req.params;
  const course = await Course.findById(id);
  if (!course) return next(new ErrorHendler("Course Note found", 404));

  await cloudinary.v2.uploader.destroy(course.poster.public_id);

  for (let i = 0; i < course.lectures.length; i++) {
    const singleLcture = course.lectures[i];
    await cloudinary.v2.uploader.destroy(singleLcture.video.public_id, {
      resource_type: "video",
    });
  }

  await Course.deleteOne({ _id: course.id });

  res.status(200).json({
    success: true,
    message: "Course delete successfully",
  });
});

//function for delete lecture from course;
export const deleteLecture = catchError(async (req, res, next) => {
  const { courseId, lectureId } = req.query;
  const course = await Course.findById(courseId);
  if (!course) return next(new ErrorHendler("Course Note found", 404));
  const lecture = course.lectures.find((item) => {
    if (item._id.toString() === lectureId.toString()) return item;
  });
  await cloudinary.v2.uploader.destroy(lecture.video.public_id, {
    resource_type: "video",
  });

  await Course.updateOne(
    { _id: courseId },
    { $pull: { lectures: { _id: lectureId } } }
  )
    .then((result) => {
      console.log(result);
      res.status(200).json({
        success: true,
        message: "Lecture deleted !!!",
      });
    })
    .catch((error) => {
      res.status(200).json({
        success: true,
        message: error,
      });
    });
});

//function for change streem

// Course.watch().on("change", async () => {
//   const state = await States.find({}).sort({ createdAt: "desc" }).limit(1);

//   const course = await Course.find({});
//   let totalview = 0;

//   for (let i = 0; i < course.length; i++) {
//     totalview += course[i].views;
//   }
//   state[0].views = totalview;
//   state[0].createdAt = new Date(Date.now());

//   await state[0].save();
// });
