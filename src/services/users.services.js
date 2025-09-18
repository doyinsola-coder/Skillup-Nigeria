import User from '../models/user.js';




export const createNewUser = async (name, email, password, phoneNumber, address) => {
    const newUser = new User ({
        name: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        address: address
    })
    await newUser.save();
    return newUser 
};



