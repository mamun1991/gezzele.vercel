const Eligible = require("../models/eligible.model.js");

// Create and Save a new Eligible

const createEligible = async (req, res) => {
    try {
        const eligible = new Eligible({
            ...req.body,
        });
        const eligibleCreated = await eligible.save();
        res.status(201).json(eligibleCreated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Retrieve all Eligibles from the database.
const getEligibleList = async (req, res) => {
    try {
        const eligibleList = await Eligible.find();
        res.status(200).json(eligibleList);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createEligible,
    getEligibleList,
};
