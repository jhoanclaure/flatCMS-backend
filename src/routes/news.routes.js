const express = require("express");
const router = express.Router();
const upload = require("../config/cloudinary");
const News = require("../models/News"); 

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, content } = req.body;

    let imageUrl = "";

    if (req.file) {
      imageUrl = req.file.path; // URL Cloudinary
    }

    const savedNews = await News.create({
      title: title || "",
      content,
      imageUrl,
    });

    res.status(201).json(savedNews);
  } catch (error) {
    console.error("Error guardando en Mongo:", error);
    res.status(500).json({ message: "Error al crear la noticia" });
  }
});

// GET /api/news
router.get("/", async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.status(200).json(news);
  } catch (error) {
    console.error("Error obteniendo noticias:", error);
    res.status(500).json({ message: "Error al obtener noticias" });
  }
});

module.exports = router;