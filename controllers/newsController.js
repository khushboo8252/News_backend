const News = require("../models/News");

// Create a news article (POST)
const createNews = async (req, res) => {
    try {
        console.log("Received Data:", req.body); // Debugging

        const { title, content, category, author } = req.body;

        if (!title || !content || !category || !author) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const news = new News({ title, content, category, author });
        await news.save();

        res.status(201).json({ message: "News article created successfully", news });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create news article" });
    }
};


// Get all news articles (GET)
const getAllNews = async (req, res) => {
    try {
        const news = await News.find().sort({ createdAt: -1 }); // Get latest news first
        res.status(200).json(news);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch news" });
    }
};

// Get trending news (GET) - Assuming trending is based on likes/views
const getTrendingNews = async (req, res) => {
    try {
        const trendingNews = await News.find().sort({ likes: -1 }).limit(5); // Top 5 most liked news
        res.status(200).json(trendingNews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch trending news" });
    }
};

module.exports = { createNews, getAllNews, getTrendingNews };
