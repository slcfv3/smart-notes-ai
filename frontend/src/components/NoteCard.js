import React from 'react';

const NoteCard = ({ note }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-2">📝 Summary</h3>
      <p>{note.summary}</p>

      <h4 className="font-medium mt-3">🏷 Keywords</h4>
      <p className="text-sm text-gray-600">{note.keywords.join(', ')}</p>

      <h4 className="font-medium mt-3">📌 To-Dos</h4>
      <ul className="list-disc ml-5 text-sm">
        {note.todos.map((todo, idx) => <li key={idx}>{todo}</li>)}
      </ul>

      <h4 className="font-medium mt-3">📄 Original Note</h4>
      <p className="text-sm text-gray-700">{note.content}</p>
    </div>
  );
};

export default NoteCard;
