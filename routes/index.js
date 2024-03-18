import {Router} from 'express'
import gamesRoutes from './games.js'
import usersRoutes from './users.js'

const router = Router();

router.get("/", (req,res)=> res.send("This is the api root!"))

router.use("/games", gamesRoutes);
router.use("/", usersRoutes);

export default router