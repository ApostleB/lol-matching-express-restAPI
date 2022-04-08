import dotenv from 'dotenv';
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import cors from "cors";
import apiRouter from "./Routes/apiRouter";

import express from "express";

const app = express();

let corsOption = {
    origin: 'http://192.168.0.2:3080', // 허락하는 요청 주소
    credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
    exposedHeaders: ["Content-Disposition"], //빌드시 삭제
};

app.use(cors(corsOption)); // CORS 미들웨어 추가

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/login", (req, res) => {
    res.sendFile(__dirname+"/Views/login.html");
})

app.use("/api", apiRouter)
export default app;