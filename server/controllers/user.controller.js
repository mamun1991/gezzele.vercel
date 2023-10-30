const User = require("../models/user.model");

const { generateJwtToken } = require("../utils/generateJwtToken");
const { compareHash, hashIt } = require("../utils/hash");

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({
                message: "Authentication failed",
            });
        } else {
            const isPasswordValid = await compareHash(password, user.password);
            if (!isPasswordValid) {
                res.status(400).json({
                    message: "Authentication failed",
                });
            } else {
                res.status(200).json({
                    message: "Login successful",
                    token: generateJwtToken(user),
                    user: {
                        email: user.email,
                        name: user.name,
                        role: user.role,
                        avatar: user.avatar,
                        bio: user.bio,
                    },
                });
            }
        }
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

const updateUser = async (req, res) => {
    const { name, email, bio } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            res.status(400).json({
                message: "User not found",
            });
        } else {
            user.name = name;
            user.bio = bio;
            user.email = email;
            if (req.file) {
                user.avatar = req.file.path;
            }
            if (req.body.password) {
                user.password = await hashIt(req.body.password);
            }
            await user.save();
            res.status(200).json({
                message: "User updated successfully",
                user: {
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    avatar: user.avatar,
                    bio: user.bio,
                },
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

module.exports = {
    login,
    updateUser,
};
