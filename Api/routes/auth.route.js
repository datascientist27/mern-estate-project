import express from 'express'
import { signup } from '../controlers/auth.controler.js';

const authRouter = express.Router();
authRouter.post("/signup",signup)

export default authRouter;