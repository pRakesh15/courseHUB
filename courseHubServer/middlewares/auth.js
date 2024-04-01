import Jwt from "jsonwebtoken";
import { catchError } from "./chatchError.js";
import ErrorHendler from "../utils/errorHendler.js";
import { User } from "../models/UserModal.js";

export const isAuthenticate = catchError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return next(new ErrorHendler("Plz Login or signUp", 404));

  const decoded = Jwt.verify(token, process.env.JWT_SECREATE);

  req.user = await User.findById(decoded.id)
    .select("-password")
    .select("-salt");
  next();
});
export const isAdminAuthenticate = catchError(async (req, res, next) => {
    
  if (req.user.role != "admin")
    return next(
      new ErrorHendler(
        `${req.user.role} is note allow to access this resourse`,
        403
      )
    );
    next();
});
