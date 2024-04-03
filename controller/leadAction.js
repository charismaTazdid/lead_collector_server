import Leads from "../model/leads.js";

// http://localhost:5000/lead/createLead
export const createLead = async (req, res) => {
    const leadData = req.body;
    try {
        const newLead = Leads(leadData);
        await newLead.save();
        return res.status(201).json(newLead);
    } catch (error) {
        console.log(error)
    }
};

export const getAllLead = (req, res) => {
    try {
        return "I will bring all the lead data to you"
    } catch (error) {
        console.log(error)
    }
};