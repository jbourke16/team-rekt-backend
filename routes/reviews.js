import { Router } from "express";
import * as controllers from "../controllers/reviews.js";
import restrict from "..helpers/restrict.js";

const router = Router();

router.get("/", controllers.getReviews);
router.get("/", controllers.getReview);
router.post("/", controllers.createReviews);
router.put("/", controllers.updateReviews);

export default router;