import{Schema, model} from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },

    phoneNumber: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'learner', 'instructor'],
        default: 'learner'
    }
});

const User = model('User', userSchema);

export default User;