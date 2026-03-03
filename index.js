const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente ");
});

const PORT = 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});