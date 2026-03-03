const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: String,
    content: {
      type: String,
      required: true,
    },
    imageUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", newsSchema);