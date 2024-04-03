import express from "express";
import { createUser, getAllUser, login } from "../controller/authAction.js";
import { verifyAdmin, verifySuperAdmin } from "../utilits/verifyToken.js";

const authRoute = express.Router();

authRoute.post('/createUser', verifySuperAdmin, createUser);
authRoute.post('/login', login);
authRoute.get('/getAllUser', verifyAdmin, getAllUser);

export default authRoute;