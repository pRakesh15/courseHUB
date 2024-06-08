import { createHash, createHmac } from "crypto";
import { catchError } from "../middlewares/chatchError.js";
import { User } from "../models/UserModal.js";
import ErrorHendler from "../utils/errorHendler.js";
import { sendEmail } from "../utils/sendEmail.js";
import { sendToken } from "../utils/sendToken.js";
import { Course } from "../models/CourseModal.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "cloudinary";
import { States } from "../models/Stats.js";

//function for creating usre..
//NOTE*- AVATAR IS UPLOADED BY FORENTEND NOW IM USING BACKEND
export const createUser = catchError(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return next(new ErrorHendler("plz fill all the field", 400));
  let user = await User.findOne({ email });
  if (user) return next(new ErrorHendler("User alredy exist", 409));
  const file = req.file;
  const fileUrl = getDataUri(file);
  const myFile = await cloudinary.v2.uploader.upload(fileUrl.content);
  user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: myFile.public_id,
      url: myFile.secure_url,
    },
  });
  //this function set the cookies to the browser
  sendToken(res, user, "Register successfully", 201);
});

//function for login user..
export const loginUser = catchError(async (req, res, next) => {
  const { email, password } = req.body;

  // console.log(email,password)
  if (!email || !password) {
    return next(new ErrorHendler("plz fill all the field", 400));
  }

  const user = await User.matchPassword(email, password);

  if (!user) {
    return next(new ErrorHendler("email or password is incorrect !!", 404));
  }

  const username = user.name.split(" ")[0];
  sendToken(res, user, `WellCome back ${username}`, 201);
});

//function for  logout user..
export const logOutUser = catchError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Loged Out",
    });
});

//function for get my profile
export const getMyprofile = catchError(async (req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});

//function for ChangePassword

export const changePassword = catchError(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword)
    return next(new ErrorHendler("plz fill  all the  field", 409));
  if (oldPassword === newPassword)
    return next(
      new ErrorHendler("old and new password can't be  same !!", 409)
    );
  const user = req.user;
  // console.log(req.user)
  const email = req.user.email;

  const isMatch = await User.matchPassword(email, oldPassword);

  if (!isMatch) return next(new ErrorHendler("Password dos't match!!", 409));
  user.password = newPassword;
  await user.save();

  res.status(200).json({
    success: true,
    messageL: "password Change successfully",
  });
});

//function  for change name or email..

export const updateEmailOrName = catchError(async (req, res, next) => {
  const { newName, newEmail } = req.body;
  const user = req.user;
  //  console.log(user.name)

  if (newName) {
    await User.findByIdAndUpdate(user._id, {
      name: newName,
    });
    res.status(200).json({
      success: true,
      message: "UserName Updated !!",
    });
  }
  if (newEmail) {
    await User.findByIdAndUpdate(user._id, {
      email: newEmail,
    });
    res.status(200).json({
      success: true,
      message: "User Email Updated !!",
    });
  }
});
//function for update the profile  picture
export const updateProfilePic = catchError(async (req, res, next) => {
  const user = req.user;
  const file = req.file;
  // console.log(user.id);
  const fileurl = getDataUri(file);
  const myFile = await cloudinary.v2.uploader.upload(fileurl.content);

  //  await cloudinary.v2.uploader.destroy(user.avatar.public_id);

  await User.findByIdAndUpdate(user.id, {
    avatar: {
      public_id: myFile.public_id,
      url: myFile.secure_url,
    },
  });
  res.status(200).json({
    success: true,
    message: "ProfilePicture Updated !!",
  });
});

//function for forgetPassword

export const forgetPassword = catchError(async (req, res, next) => {
  const { email } = req.body;
  if (!email) return next(new ErrorHendler("Please enter email", 404));
  const user = await User.findOne({ email })
    .select("-password")
    .select("-salt");
  if (!user) return next(new ErrorHendler("User Note found !!", 404));
  const resetToken = await User.getResetToken();
  await User.findByIdAndUpdate(user._id, {
    resetPasswordToken: createHash("sha256").update(resetToken).digest("hex"),
    resetPasswordExppire: Date.now() + 9 * 60 * 1000,
  });

  const url = `${process.env.FRONTEND_URL}ResetPassword/${resetToken}`;

  const message = `Click on the link to reset Password ${url}. if you dont request to reset the password please ignor`;

  await sendEmail(user.email, "CourseHub resetPassword", message);

  res.status(200).json({
    success: true,
    message: "Message sent successfully",
  });
});

//function for resetPassword
export const resetPassword = catchError(async (req, res, next) => {
  const { token } = req.params;

  const resetPasswordToken = createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExppire: {
      $gt: Date.now(),
    },
  });

  if (!user) return next(new ErrorHendler("Invalid or expaired Token", 401));
  await User.findByIdAndUpdate(user._id, {
    password: createHmac("sha256", user.salt)
      .update(req.body.password)
      .digest("hex"),
    resetPasswordToken: undefined,
    resetPasswordExppire: undefined,
  });
  res.status(200).json({
    success: true,
    message: "Password reset successfully",
  });
});

//function for add course to the list
export const addToPlaylist = catchError(async (req, res, next) => {
  const user = req.user;
  const course = await Course.findById(req.body.id);
  if (!course) return next(new ErrorHendler("Invalide course ID", 404));
  const existItem = user.playlist.find((item) => {
    if (item.course.toString() === course._id.toString()) return true;
  });

  if (existItem) return next(new ErrorHendler("Course Alredy Added", 409));
  const newPlaylistItem = {
    course: course._id,
    poster: course.poster.url,
  };
  User.updateOne({ _id: user.id }, { $push: { playlist: newPlaylistItem } })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Course added to the playList",
      });
    })
    .catch((error) => {
      res.status(200).json({
        success: true,
        message: error,
      });
    });
});

//function  for delete  from courseList

export const deleteFromList = catchError(async (req, res, next) => {
  const user = req.user;
  const course = await Course.findById(req.params.id);
  if (!course) return next(new ErrorHendler("Invalide course ID", 404));
  User.updateOne(
    { _id: user.id },
    { $pull: { playlist: { course: course._id } } }
  )
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Removed from the Playlist",
      });
    })
    .catch((error) => {
      res.status(200).json({
        success: true,
        message: error,
      });
    });
});

//Admin function
//function for find all the user..
export const getAllusers = catchError(async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json({
    success: true,
    users,
  });
});

//function for update User Roll..
export const updateRoll = catchError(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) return next(new ErrorHendler("User not found", 404));

  if (user.role === "user") {
    await User.findByIdAndUpdate(user._id, {
      role: "admin",
    });
    res.status(200).json({
      success: true,
      message: `${user.name} became an admin`,
    });
  } else {
    await User.findByIdAndUpdate(user._id, {
      role: "user",
    });
    res.status(200).json({
      success: true,
      message: `${user.name} became a user`,
    });
  }
});
//function of change  streem
User.watch().on("change", async () => {
  const state = await States.find({}).sort({ createdAt: "desc" }).limit(1);

  const subscription = await User.find({ "subscription.status": "Active" });

  state[0].users = await User.countDocuments();
  state[0].subscription = subscription.length;
  state[0].createdAt = new Date(Date.now());

  await state[0].save();
});
