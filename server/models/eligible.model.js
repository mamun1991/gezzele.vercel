const mongoose = require("mongoose");

const eligibleSchema = new mongoose.Schema(
    {
        amountSeeking: {
            type: String,
            required: true,
        },
        averageMonthlySales: {
            type: String,
            required: true,
        },
        timeInBusiness: {
            type: String,
            required: true,
        },
        creditScore: {
            type: String,
            required: true,
        },
        entityType: {
            type: String,
            required: true,
        },
        industry: {
            type: String,
            required: true,
        },
        businessName: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Eligible", eligibleSchema);
