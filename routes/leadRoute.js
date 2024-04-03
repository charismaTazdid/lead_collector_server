import express from "express";
import { createLead, getAllLead } from "../controller/leadAction.js";

const leadRoute = express.Router();


leadRoute.post('/createLead', createLead);
leadRoute.get('/getAllLead', getAllLead);


export default leadRoute;