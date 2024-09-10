import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'],
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    college: {
        type: String
    },
    year: {
        type: Number
    }

}, { timestamps: true });

const User = mongoose.model("user", userSchema);

export default User