const express = require("express");
const verifyJwtToken = require("../middlewares/verifyJwtToken");
const { createBlog, getBlogs, getBlog, getRecommendBlogs, deleteBlog, updateBlog, getSearchBlogs } = require("../controllers/blog.controller");
const uploadBlogImage = require("../utils/uploadBlogImage");
const router = express.Router();

router.post("/", uploadBlogImage.single("image"), verifyJwtToken, createBlog);

router.patch("/:id", uploadBlogImage.single("image"), verifyJwtToken, updateBlog);

router.get("/", getBlogs);

router.get("/search", getSearchBlogs);

router.get("/:id", getBlog);

router.delete("/:id", verifyJwtToken, deleteBlog);

router.get("/recommend/:title", getRecommendBlogs);

module.exports = router;
