import express from "express";
import { createUser, login } from "../controller/authAction.js";


const authRoute = express.Router();

authRoute.post('/createUser', createUser);
authRoute.post('/login', login);


export default authRoute;