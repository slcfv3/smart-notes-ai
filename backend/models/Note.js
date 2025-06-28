const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  content: String,
  summary: String,
  keywords: [String],
  todos: [String],
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);
