import express from "express";
import { config } from "dotenv";
import courseRoute from "./routes/courseRout.js";
import userRoute from "./routes/userRout.js";
import adminRout from "./routes/otherRouts.js"
import paymentRout from "./routes/payementRouts.js"
import { errorMiddelWare } from "./middlewares/errorHendler.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
config({
  path: "./config/config.env",
});
app.use(cookieParser());
app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true,
  methods:["GET","POST","PUT","DELETE"],
}))

app.use("/api/v1", courseRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", paymentRout);
app.use("/api/v1",adminRout)

export default app;

app.use(errorMiddelWare);
