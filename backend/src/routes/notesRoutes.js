import express from "express";
import {
  createnote,
  deletenote,
  getallnotes,
  updatenote,
  getanote,
} from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getallnotes);

router.get("/:id",getanote);

router.post("/", createnote);

router.put("/:id", updatenote);

router.delete("/:id", deletenote);

export default router;
