import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    category: { type: String, required: true },
    country: { type: String },
    website: { type: String, required: true },
    primaryEmail: { type: String },
    secondaryEmail: { type: String },
    phone: { type: String },
    whatsApp: { type: String },
    socialUrl: { type: String },
    linkedinUrl: { type: String },
    employee: { type: String },
    employeeContact: { type: String },
    othersInfo: { type: String },
});

const Leads = mongoose.model('Leads', LeadSchema);
export default Leads;