import express from "express";
import { config } from "dotenv";
import courseRoute from "./routes/courseRout.js";
import userRoute from "./routes/userRout.js";
import { errorMiddelWare } from "./middlewares/errorHendler.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
config({
  path: "./config/config.env",
});

app.use("/api/v1", courseRoute);
app.use("/api/v1", userRoute);

export default app;

app.use(errorMiddelWare);
