import Leads from "../model/leads.js";

// http://localhost:5000/lead/createLead
export const createLead = async (req, res) => {
    const leadData = req.body;
    try {
        const newLead = new Leads(leadData);
        await newLead.save();
        return res.status(201).json(newLead);
    } catch (error) {
        console.log(error)
    }
};

// http://localhost:5000/lead/getAllLead
export const getAllLead = async (req, res) => {
    try {
        const leads = await Leads.find({});
        res.status(200).json(leads);
    } catch (error) {
        console.log(error)
    }
};

// http://localhost:5000/lead/deleteLead/:id
export const deleteLead = async (req, res) => {
    const { id } = req.params;
    try {
        await Leads.findByIdAndDelete(id);
        res.status(202).json({ message: "Collection Deleted Successfully." })
    } catch (error) {
        console.log(error)
    }
}