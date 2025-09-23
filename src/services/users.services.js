import User from '../models/user.js';




export const createNewUser = async (name, email, password, phoneNumber, address, role) => {
    const newUser = new User ({
        name: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        address: address,
        role: role
    })
    await newUser.save();
    return newUser 
};



