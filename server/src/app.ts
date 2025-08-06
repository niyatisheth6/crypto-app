import express from "express";
import createHttpError from "http-errors";
import exampleRoute from "./routes/exampleRoutes";
import userRoute from "./routes/userRoutes";
import mongoose from "mongoose";
import { DB, PORT } from "./config";
import { errorHandler } from "./middleware/errorHanlder";
import passport from "passport";
import kPassport from "./middleware/passport";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import path from "path";

config();

const app = express();

app.use(
  cors({ origin: process.env.FRONTEND_URL || "*", credentials: true })
);

app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());
kPassport(passport);

app.use("/", exampleRoute);  
app.use("/user", userRoute);

const __dirnamePath = path.resolve(); 
app.use(express.static(path.join(__dirnamePath, "frontend", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirnamePath, "frontend", "build", "index.html"));
});

app.use(errorHandler);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to db");
    app.listen(PORT, () => {
      console.log(`Listening on PORT ${PORT}`);
    });
  })
  .catch(() => {
    throw createHttpError(501, "Unable to connect to database");
  });
