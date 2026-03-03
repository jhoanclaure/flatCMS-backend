const express = require("express");
const router = express.Router();

const {
  createNews,
  getNews,
} = require("../controllers/news.controller");

router.post("/", createNews);
router.get("/", getNews);

module.exports = router;