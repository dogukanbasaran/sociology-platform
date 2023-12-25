import express from "express";
import {getSources, createSource} from "../controllers/source.controller.js";

const router = express.Router();

router.get("/get-sources", getSources);
router.post("/create-source", createSource);

export default router;