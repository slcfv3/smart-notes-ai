import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteCard from '../components/NoteCard';

const textareaStyle = {
  margin: "10px",
  width: "70%",
  height: "150px",
  borderRadius: "3px",
  border: "3px solid #11122b",
  fontSize: "1.5rem",
  fontFamily: "inherit",
  color: "inherit",
  padding: "1.5rem 2rem",
};

const btnStyle = {
  backgroundColor: "#cea135",
  color: "#11122b",
  fontSize: "1.25em",
  padding: "10px 25px",
  border: "1px solid #cea135",
  borderRadius: "2px"
};

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const fetchNotes = async () => {
    try {
        const res = await axios.get('http://localhost:3001/api/notes');
        setNotes(res.data);
    } catch (err) {
        console.error("Failed to fetch notes:", err.message);
    }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/api/notes', { content: input });
    setInput('');
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          className="w-full p-4 border rounded-lg"
          rows="5"
          value={input}
          style={textareaStyle}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your note here..."
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded" style={btnStyle}>
          Submit
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
