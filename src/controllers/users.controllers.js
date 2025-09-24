import { createNewUser, getAll } from "../services/users.services.js";



export const createUser = async (req, res) => {
    const {name, email, password, phoneNumber, address, role} = req.body;
    const newUser = await createNewUser (name, email, password, phoneNumber, address, role)

    if (!newUser) {
        return res.status(400).json ({message: "user not created"})

    }
    res.status(201).json(newUser)
    
};

export const getALLUsers = async (req, res) => {
  const newUser = await getAll()

  if (!newUser) {
    return res.status(400).json({message: "Could not get all users"})
  }
  res.status(200).json (newUser)
}







