const express = require("express");
const { createEligible, getEligibleList } = require("../controllers/eligible.controller");
const router = express.Router();

// Create and Save a new Eligible
router.post("/", createEligible);

router.get("/", getEligibleList);

module.exports = router;
