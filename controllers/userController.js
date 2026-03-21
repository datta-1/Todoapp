const userModel = require('../models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register Controller
const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).send({
                message: 'Please fill all the fields'
            });
        }

        // Check if user exists
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).send({
                message: 'User already exists'
            });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).send({
            message: 'User registered successfully'
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Error in register API'
        });
    }
};


// Login Controller
const loginController = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({
                message: 'Please fill all the fields'
            });
        }

        // Check user
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).send({
                message: 'User does not exist'
            });
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).send({
                message: 'Invalid credentials'
            });
        }
        // token generation
        const token = jwt.sign({ userId: user._id }, 'techy', { expiresIn: '1y' });
        res.status(200).send({
            message: 'User logged in successfully',
            token,
            user: {
                name: user.name,
                email: user.email,
                id: user._id
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Error in login API'
        });
    }
};


module.exports = { registerController, loginController };