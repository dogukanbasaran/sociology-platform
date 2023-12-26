import express from "express";
import {getSources,getSource, createSource} from "../controllers/source.controller.js";

const router = express.Router();

router.get("/", getSources);
router.get("/:id", getSource);

router.post("/", createSource);

export default router;