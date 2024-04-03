import express from "express";
import { createUser, getAllUser, login } from "../controller/authAction.js";


const authRoute = express.Router();

authRoute.post('/createUser', createUser);
authRoute.post('/login', login);
authRoute.get('/getAllUser', getAllUser);


export default authRoute;