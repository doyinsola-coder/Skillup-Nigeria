import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendWelcomeEmail } from "../services/email.services.js";

export const createUser = async (req, res) => {
    const { name, email, password, phoneNumber, address, role } = req.body;


    try {
        let User = await User.findOne({ email });
        if (User) {
            return res.status(409).json({ msg: "user already exists with this email" });
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
    } catch (err) {
        console.error('Error in register:', err);
        return res.status(500).json({ msg: 'Server error'});
  const { name, email, password, phoneNumber, address, role } = req.body;

  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const saltRounds = parseInt(process.env.SALT_ROUNDS || "10", 10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      role: role || "learner",
    });

    await user.save();

    // Send welcome email (non-blocking)
    try {
      await sendWelcomeEmail(user.email, user.name);
      console.log("Welcome email sent successfully!");
    } catch (err) {
      console.error("Email sending failed:", err);
    }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
    // Generate JWT
    const payload = { user: { id: user._id, role: user.role } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "1h",
    });

    // ✅ Success response
    return res.status(201).json({
      success: true,
      message: "Registration successful!",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        address: user.address,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error in user registration:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
        return res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
export const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const payload = { user: { id: user._id, role: user.role } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "1h",
    });

    return res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Error in login:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
