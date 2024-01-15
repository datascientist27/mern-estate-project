import express from 'express'
import { signup } from '../controlers/auth.controler.js';

const authRouter = express.Router();
authRouter.post("/sign-up",signup)

export default authRouter;