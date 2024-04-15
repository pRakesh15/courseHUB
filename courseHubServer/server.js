import app from "./app.js";
import { connectDB } from "./config/database.js";
import cloudinary from "cloudinary";
import Razorpay from "razorpay";
import cron from "node-cron";
import { States } from "./models/Stats.js";

connectDB();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECREAT,
});

cron.schedule("0 0 0 1 * *", async () => {
  try {
    await States.create({});
  } catch (error) {
    console.log(error);
  }
});

export const instant = new Razorpay({
  key_id: process.env.RAZEREPAY_API_KEY,
  key_secret: process.env.RAZEREPAY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server start at port ${process.env.PORT}`);
});
