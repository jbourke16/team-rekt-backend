import db from '../db/connection.js';
import bcrypt from 'bcrypt';
import fetch from "node-fetch";
import { promises as fsPromises} from "fs";
import Game from "../models/Game.js"

const insertData = async () => {
    await db.dropDatabase();
    
}

