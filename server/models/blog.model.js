const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        tableofContents: [
            {
                title: {
                    type: String,
                    default: "",
                },
                content: {
                    type: String,
                    default: "",
                },
            },
        ],
        image: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        category: {
            type: String,
            required: true,
        },
        readtime: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Blog", BlogSchema);
