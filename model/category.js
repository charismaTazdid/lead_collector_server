import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    }
});

const Categories = mongoose.model('Categories', CategorySchema)
export default Categories;