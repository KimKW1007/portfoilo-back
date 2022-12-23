import cors from "cors";
import express from "express";
import { commentRouter } from "./router/comments.js";
import { projectRouter } from "./router/project.js";

const app = express();

// CORS 에러 방지
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 기본 페이지
app.get("/", (req, res) => {
    res.send("안녕하세요, 레이서 프로젝트 API 입니다.");
});

// router, service 구현 (userAuthRouter는 맨 위에 있어야 함.)
app.use("/projects", projectRouter);
app.use("/comments", commentRouter);




export { app };
