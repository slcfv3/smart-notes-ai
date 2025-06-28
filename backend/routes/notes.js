const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const { processNote } = require('../services/openaiService');

router.post('/', async (req, res) => {
  const { content } = req.body;
  try {
    const { summary, keywords, todos } = await processNote(content);
    const note = new Note({ content, summary, keywords, todos });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.json(notes);
});

module.exports = router;
