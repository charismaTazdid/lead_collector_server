import express from "express";
import { createLead, getAllLead } from "../controller/leadAction.js";
import { verifyAdmin } from "../utilits/verifyToken.js";

const leadRoute = express.Router();

leadRoute.post('/createLead', verifyAdmin, createLead);
leadRoute.get('/getAllLead', verifyAdmin, getAllLead);

export default leadRoute;