import Categories from "../model/category.js";

// http://localhost:5000/category/createCategory
export const createCategory = async (req, res) => {
    const categoryData = req.body;
    try {
        const newCategory = new Categories(categoryData)
        await newCategory.save()
        res.status(201).json(newCategory)
    } catch (error) {
        console.log(error)
    }
};

// http://localhost:5000/category/getAllCategory
export const getAllCategory = async (req, res) => {
    try {
        const categories = await Categories.find({})
        res.status(200).json(categories)
    } catch (error) {
        console.log(error)
    }
};