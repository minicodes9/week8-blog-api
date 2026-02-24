const UserModel = require('../models/user.model');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { hashPassword } = require('../utils/bcrypt');

//Register a new user
const registerUser = async (req, res, next) => {
    try {
        const { email, password, name } = req.body;

        const existingUser = await UserModel.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exist" });
        }

        await hashPassword(password);

        const user = new UserModel({
            email: email,
            password: hashed,
            name: name
        });

        await user.save();

        return res.status(200).json({ message: 'User registered Successfully' });
    } catch (error) {
        next(error);
    }
};

//Login an existing user
const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ message: 'User does not exist' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Invalid credentials');

        const token = jwt.sign(
            { userId: user._id, name: user.name }, // payload
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        const reUser = {
            _id: user._id,
            email: user.email,
            name: user.name,
        };

        return res.status(200).json({ message: 'logged In', user, token });
    } catch (error) {
        next(error);
    }
};

module.exports = { loginUser, registerUser };