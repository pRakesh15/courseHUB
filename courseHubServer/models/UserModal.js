import mongoose from "mongoose";
import validator from "validator";
import Jwt from "jsonwebtoken";
import { createHmac, randomBytes } from "crypto";
import crypto from "crypto";
import ErrorHendler from "../utils/errorHendler.js";
import { sendToken } from "../utils/sendToken.js";
//creactin the schema for the user
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: [true, "Please enter your Password"],
    minLength: [6, "Password must Be greater then 6"],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  subscription: {
    id: String,
    status: String,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  playlist: [
    {
     
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
      poster: String,
    },
  ],
  creaatedAt: {
    type: Date,
    default: Date.now,
  },
  salt: {
    type: String,
  },
  resetPasswordToken: String,
  resetPasswordExppire: String,
});

//function for creating a token when user register or login..
// userSchema.methods.getJWTToken = function () {
//   return Jwt.sign({ id: this._id }, process.env.JWT_SECREATE, {
//     expiresIn: "15D",
//   });
// };

//this is a pre function use for hassing the password..

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return;

  const salt = randomBytes(16).toString();

  const hasesPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  this.salt = salt;
  this.password = hasesPassword;

  next();
});

//writing a vertual function for matching the hased password and the user provided password..

userSchema.static("matchPassword", async function (email, password) {
  const user = await this.findOne({ email }).select("+password");
  if (!user) return false;
  const salt = user.salt;
  const hasedPassword = user.password;
  const userProvidedhasedPassword = createHmac("sha256", salt)
    .update(password)
    .digest("hex");
  if (hasedPassword != userProvidedhasedPassword) return false;
  const thisUser = { ...user.toObject(), password: undefined, salt: undefined };

  return thisUser;
});

userSchema.static("getResetToken", async function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
    return resetToken;
});

export const User = mongoose.model("User", userSchema);
