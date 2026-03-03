require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db"); // 👈 IMPORTANTE
const newsRoutes = require("./src/routes/news.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔥 CONECTAR MONGO ANTES
connectDB();

app.use("/api/news", newsRoutes);

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});