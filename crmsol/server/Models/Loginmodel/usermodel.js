const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,          // Ensure emails are unique
        lowercase: true,       // Automatically convert emails to lowercase
    },
    password: {
        type: String,
        required: true,
        minlength: 6,          // Enforce minimum password length
    },
    role: {
        type: String,
        enum: ['admin', 'user'], // User roles (optional)
        default: 'user',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
