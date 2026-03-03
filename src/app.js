const express = require("express");
const cors = require("cors");

const newsRoutes = require("./routes/news.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/news", newsRoutes);

module.exports = app;