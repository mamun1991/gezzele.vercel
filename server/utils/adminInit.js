const userModel = require("../models/user.model");
const { hashIt } = require("./hash");
const dotenv = require("dotenv");

dotenv.config();

const adminInit = async () => {
    try {
        const admin = await userModel.find();
        if (admin.length === 0) {
            await new userModel({
                name: "Admin",
                email: process.env.ADMIN_EMAIL,
                password: await hashIt(process.env.ADMIN_PASSWORD),
                role: "admin",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                avatar: "https://res.cloudinary.com/dqdll5wus/image/upload/v1650916198/samples/cloudinary-icon.png",
            }).save();
            console.log("Admin created");
        } else {
            console.log("Admin already exists");
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = adminInit;
