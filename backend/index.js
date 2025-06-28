const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 3001;

const app = express();
const notesRouter = require('./routes/notes');
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use('/api/notes', notesRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
