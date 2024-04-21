import express from "express";
import { createLead, deleteLead, getAllLead } from "../controller/leadAction.js";
import { verifyAdmin, verifySuperAdmin } from "../utilits/verifyToken.js";

const leadRoute = express.Router();

leadRoute.post('/createLead', verifyAdmin, createLead);
leadRoute.get('/getAllLead', verifyAdmin, getAllLead);
leadRoute.delete('/deleteLead/:id', verifySuperAdmin, deleteLead )

export default leadRoute;