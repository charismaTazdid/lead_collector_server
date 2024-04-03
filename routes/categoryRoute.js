import express from "express";
import { createCategory, getAllCategory } from "../controller/categoryAction.js";
import { verifyAdmin } from "../utilits/verifyToken.js";

const categoryRoute = express.Router();

categoryRoute.post('/createCategory', verifyAdmin, createCategory);
categoryRoute.get('/getAllCategory', verifyAdmin, getAllCategory);

export default categoryRoute;