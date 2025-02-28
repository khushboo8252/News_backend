const express = require("express");
const { getTrendingNews, createNews, getAllNews } = require("../controllers/newsController");

const router = express.Router();

// Route to get trending news
router.get("/trending", getTrendingNews);

// Route to create a new news article
router.post("/", createNews);

// Route to get all news articles
router.get("/", getAllNews);

module.exports = router;
