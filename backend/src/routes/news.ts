import express from "express";
import * as NewsController from "../controllers/news";

const router = express.Router();

router.get("/", NewsController.generalNews);

export default router;
