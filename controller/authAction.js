import User from "../model/user.js";
import { customError } from "../utilits/customError.js";
import bcrypt from "bcrypt";

// http://localhost:5000/auth/createUser
export const createUser = async (req, res, next) => {
    const { userName, password, role } = req.body;
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const newUser = new User({
            userName: userName,
            password: hashedPassword,
            role: role
        });
        await newUser.save();
        res.status(201).json(newUser)
    } catch (error) {
        // res.status(403).json(error.message)
        next(error)
    }
};

// http://localhost:5000/auth/login
export const login = (req, res) => {
    try {
        return "I will response while someone try to login";
    } catch (error) {
        console.log(error)
    }
};