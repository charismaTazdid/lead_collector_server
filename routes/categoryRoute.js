import express from "express";
import { createCategory, getAllCategory } from "../controller/categoryAction.js";

const categoryRoute = express.Router();

categoryRoute.post('/createCategory', createCategory);
categoryRoute.get('/getAllCategory', getAllCategory);

export default categoryRoute;