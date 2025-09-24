import { createNewUser, getAll } from "../services/users.services.js";
import  User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



export const createUser = async (req, res) => {
    const { name, email, password, phoneNumber, address, role } = req.body;

    try {
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "user already exists" });
        }

        const saltRounds = parseInt(process.env.SALT_ROUNDS || '10', 10);
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = new User({
            name,
            email,
            password: hashedPassword,
            phoneNumber,
            address,
            role: role || 'learner'
        });

        await user.save();

        const payload = { user: { id: user._id, role: user.role } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '1h' });

        return res.status(201).json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phoneNumber: user.phoneNumber,
                address: user.address,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Error in user registration:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

export async function LoginUser(req, res) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const payload = { user: { id: user._id, role: user.role } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '1h' });

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (err) {
        console.error('Error in login:', err);
        return res.status(500).json({ message: 'server error' });
    }
}



