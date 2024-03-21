import { catchError } from "../middlewares/chatchError.js";
import { User } from "../models/UserModal.js";
import ErrorHendler from "../utils/errorHendler.js";
import { sendToken } from "../utils/sendToken.js";

//function for creating usre..
export const createUser = catchError(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return next(new ErrorHendler("plz fill all the field", 400));
  let user = await User.findOne({ email });

  if (user) return next(new ErrorHendler("User alredy exist", 409));

  user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "temp",
      url: "www.nothing.com",
    },
  });
  //this function set the cookies to the browser
  sendToken(res, user, "Register successfully", 201);
});

//function for login user..
export const loginUser = catchError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new ErrorHendler("plz fill all the field", 400));

  const user = await User.matchPassword(email, password);



  if (!user)
    return next(new ErrorHendler("email or password is incorrect !!", 404));
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
     const user=req.user;
     res.status(200).json({
      success:true,
      user
     })
});

//function for ChangePassword

export const changePassword=catchError(async(req,res,next)=>
{
   const{oldPassword,newPassword}=req.body;
   if(!oldPassword || !newPassword) return next(new ErrorHendler("plz fill  all the  field",409));
if(oldPassword===newPassword) return next(new ErrorHendler("old and new password can't be  same !!",409));
   const user=req.user;
   // console.log(req.user)
   const email=req.user.email;

   const isMatch=await User.matchPassword(email,oldPassword);

   if(!isMatch) return next(new ErrorHendler("Password dos't match!!",409));
    user.password=newPassword;
    await user.save();

    res.status(200).json({
      success:true,
      messageL:"password Change successfully"
    });


});

//function  for change name or email..

//NOTE HAVE SOME ERROR IN THIS FIELD 

export const updateEmailOrName=catchError(async(req,res,next)=>
{
   const{newName,newEmail}=req.body;
   const user=req.user;
   // console.log(user.name)
   
   if(newName) user.name=newName;
   if(newEmail) user.email=newEmail;
   await user.save();
    res.status(200).json({
      success:true,
      messageL:"Updated!"
    });


});

export const getAllusers = (req, res, next) => {
  res.send({
    status: "success",
    message: "working",
  });
};
