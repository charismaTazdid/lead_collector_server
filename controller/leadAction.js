import Leads from "../model/leads.js";

export const createLead = (req, res) => {
    try {
        return "I will create new Lead"
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