const express = require("express");
const verifyJwtToken = require("../middlewares/verifyJwtToken");
const { login, updateUser } = require("../controllers/user.controller");
const uploadBlogImage = require("../utils/uploadBlogImage");

const router = express.Router();

router.patch("/update", uploadBlogImage.single("image"), verifyJwtToken, updateUser);

router.post("/login", login);

module.exports = router;
