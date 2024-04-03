import jwt from "jsonwebtoken";
import { customError } from "./customError.js";

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return next(customError(401, "You are Not Authenticated."));
    }
    const tokenBearer = token.split(" ");
    const bearerToken = tokenBearer[1];
    jwt.verify(bearerToken, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return next(customError(403, "Bad request. Token is Not Valid."));
        }
        req.user = user;
        next();
    });
};

// Admin Verification
export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (!req.user) {
            return next(customError(401, "You are not authenticated as Admin!"));
        }
        if (req.user.role === "admin" || req.user.role === "superAdmin") {
            next();
        } else {
            return next(customError(403, "You are not authorized!"));
        }
    });
};

// Super Admin Verification
export const verifySuperAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (!req.user) {
            return next(customError(401, "You are not authenticated as Super Admin!"));
        }
        if (req.user.role === "superAdmin") {
            next();
        } else {
            return next(customError(403, "Restricted Area. You are Not Allowed."));
        }
    });
};