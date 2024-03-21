import Jwt from "jsonwebtoken";

   

export const sendToken=(res,user,message,statusCode)=>
{
   
    const token= Jwt.sign({ id: user._id }, process.env.JWT_SECREATE, {
        expiresIn: "15D",
      });
    //   console.log(token);
    const options={
        expires:new Date(Date.now()+15*24*60*60*1000),
        httpOnly:true,
        secure:true,
        sameSite:true,
    }

    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        message,
        user
    });
}