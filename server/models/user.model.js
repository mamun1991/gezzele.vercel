const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            default: "https://res.cloudinary.com/dqdll5wus/image/upload/v1650916198/samples/cloudinary-icon.png",
        },
        bio: {
            type: String,
            default: "",
        },
        role: {
            type: String,
            default: "user",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", UserSchema);
