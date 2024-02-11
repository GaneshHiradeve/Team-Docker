import express from 'express';

import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from "cors";
import router from './routes/user.js';
import { ErrorMiddleware } from './middleware/error.js';
import postrouter from './routes/post.js';


config({
    path:'./config/config.env'
})

const app=express();
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(router)
app.use(postrouter)
app.use(ErrorMiddleware)


export default app;