import express from "express";
import {
  createnote,
  deletenote,
  getallnotes,
  updatenote,
} from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getallnotes);

router.post("/", createnote);

router.put("/:id", updatenote);

router.delete("/:id", deletenote);

export default router;
