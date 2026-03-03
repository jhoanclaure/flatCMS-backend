const News = require("../models/News");

const createNews = async (req, res) => {
  try {
    const { title, content, imageUrl } = req.body;

    const news = await News.create({
      title,
      content,
      imageUrl,
    });

    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNews,
  getNews,
};