import User from "../model/user.js";
import jwt from "jsonwebtoken";
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
        next(error)
    }
};

// http://localhost:5000/auth/login
export const login = async (req, res, next) => {
    const { userName } = req.body;
    try {
        const user = await User.findOne({ userName: userName });
        if (!user) return next(customError(404, "User Not Found With This User Name"))

        const isPasswordMatch = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordMatch) {
            return next(customError(400, "Wrong Password"))
        };
        const token = jwt.sign({ id: user._id, role: user.role, userName: userName }, process.env.JWT_SECRET);
        // const { password, role, ...restDetails } = user._doc;
        // const cookieAge = 10 * 60 * 60 * 1000; // 10 day 
        // res.cookie("token", token, { httpOnly: true, maxAge: cookieAge }).status(200).send({ ...restDetails });
        res.status(200).send({ token });
    } catch (error) {
        next(error)
    }
};

// http:localhost:5000/auth/getAllUser

export const getAllUser = async(req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
}