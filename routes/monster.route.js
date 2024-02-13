// Create the express router to handle our products requests
import express from "express";
import {
    getMonsters,
    getMonster,
    createMonster,
    updateMonster,
    deleteMonster
} from "../controllers/monster.controller.js";

// Create the express router to handle the monster requests
const router = express.Router();

// Define the routes for the monster router
router.get("/", getMonsters);
router.get("/:id", getMonster);
router.post("/", createMonster);
router.patch("/:id", updateMonster);
router.delete("/:id", deleteMonster);

export default router;
