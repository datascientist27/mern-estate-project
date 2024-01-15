import express from "express";
import { test } from "../controlers/user.controlers.js";

const useRouter = express.Router();
useRouter.get('/test',test)
export default useRouter;