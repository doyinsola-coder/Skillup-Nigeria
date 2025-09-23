import { createNewUser } from "../services/users.services.js";


export const createUser = async (req, res) => {
    const {name, email, password, phoneNumber, address, role} = req.body;
    const newUser = await createNewUser (name, email, password, phoneNumber, address, role)

    if (!newUser) {
        return res.status(400).json ({meassage: "user not created"})

    }
    res.status(201).json(newUser)
}

try{
    let User = await newUser.findOne({email});
    if (User) {
        return res.status(400).json({message: "user already exists"});
    }

    const saltRounds = parseINT(process.env.SALT_ROUNDS || '10', 10);
    const hashedPassword = await bcrypt.hash(password, salt);

    User = newUser({
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

    async function LoginUser(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }