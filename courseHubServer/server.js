import app from "./app.js";
import { connectDB } from "./config/database.js";
import cloudinary from 'cloudinary'
connectDB();
 

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API,
    api_secret:process.env.CLOUDINARY_SECREAT

});;

app.listen(process.env.PORT,()=>
{
    console.log(`Server start at port ${process.env.PORT}`)
})