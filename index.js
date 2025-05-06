const express = require('express');
const app = express();
const port = 5000;

// Import routes from the notes.js API module
const notesApi = require('./api/notes');

// Middleware to parse JSON bodies
app.use(express.json());

//  Get all notes
app.get('/api/notes', notesApi.getAllNotes);

//  Get a single note by ID
app.get('/api/notes/:id', notesApi.getNoteById);

//  Create a new note
app.post('/api/notes', notesApi.createNote);

//  Update an existing note
app.put('/api/notes/:id', notesApi.updateNote);

//  Delete a note by ID
app.delete('/api/notes/:id', notesApi.deleteNote);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
