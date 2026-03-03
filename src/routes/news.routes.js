const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

const {
  createNews,
  getNews,
} = require("../controllers/news.controller");

router.post("/", upload.single("image"), createNews);
router.get("/", getNews);

module.exports = router;