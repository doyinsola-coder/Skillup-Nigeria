import { createNewUser } from "../services/users.services.js";


export const createUser = async (req, res) => {
    const {name, email, password, phoneNumber, address} = req.body;
    const newUser = await createNewUser (name, email, password, phoneNumber, address)

    if (!newUser) {
        return res.status(400).json ({meassage: "user not created"})

    }
    res.status(201).json(newUser)
    
}






