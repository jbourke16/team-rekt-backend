import { Router } from "express";
import * as controllers from "../controllers/games.js";

const router = Router();

router.get("/" , controllers.getGames);

export default router;