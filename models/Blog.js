const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: String, default: " Anonymous" },
  },
  { timestamps: true, versionKey: false },
);

module.exports = mongoose.model("Blog", blogSchema);
