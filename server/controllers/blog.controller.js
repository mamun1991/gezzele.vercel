const Blog = require("../models/blog.model");

const createBlog = async (req, res) => {
    try {
        const { title, description, tableofContents, category, readtime } = req.body;
        const blog = await Blog.create({
            title,
            description,
            tableofContents: JSON.parse(tableofContents),
            image: req.file.path,
            user: req.user.id,
            category,
            readtime,
        });
        res.status(200).json({
            success: true,
            blog,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getBlogs = async (req, res) => {
    const page = req.query.page || 0;
    try {
        const blogs = await Blog.find({})
            .populate("user", "-password")
            .skip(page * 12)
            .limit(12)
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            blogs,
            pageCount: Math.floor((await Blog.countDocuments()) / 13),
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate("user", "-password");
        res.status(200).json({
            success: true,
            blog,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getRecommendBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({
            // title: { $regex: req.params.title, $options: "i" },
        })
            .limit(3)
            .sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            blogs,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        await blog.remove();
        res.status(200).json({
            success: true,
            message: "Blog deleted successfully",
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateBlog = async (req, res) => {
    try {
        const { title, description, tableofContents, category, readtime } = req.body;
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        blog.title = title;
        blog.description = description;
        blog.tableofContents = JSON.parse(tableofContents);
        blog.category = category;
        blog.readtime = readtime;
        if (req.file) {
            blog.image = req.file.path;
        }
        await blog.save();
        res.status(200).json({
            success: true,
            blog,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getSearchBlogs = async (req, res) => {
    const page = req.query.page || 0;
    try {
        const blogs = await Blog.find({
            title: { $regex: req.query.title, $options: "i" },
        })
            .sort({ createdAt: -1 })
            .populate("user", "-password")
            .skip(page * 12)
            .limit(12);
        res.status(200).json({
            success: true,
            blogs,
            pageCount: Math.floor(
                (await Blog.find({
                    title: { $regex: req.query.title, $options: "i" },
                }).countDocuments()) / 13
            ),
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createBlog,
    getBlogs,
    getBlog,
    getRecommendBlogs,
    deleteBlog,
    updateBlog,
    getSearchBlogs,
};
