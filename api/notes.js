// api/notes.js

let notes=[{id:1, title:'workout', message: "lifted 70 kgs bench press"}];

  // Get all notes
  const getAllNotes = (req, res) => {
    res.status(200).json(notes);
  };
  
  // Get a note by ID
  const getNoteById = (req, res) => {
    const { id } = req.params;
    const note = notes.find(note => note.id == id);
  
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
  
    res.status(200).json(note);
  };
  
  // Create a new note
  const createNote = (req, res) => {
    const { title, message } = req.body;
  
    if ( !title || !message ) {
      return res.status(400).json({ message: 'Title and content are required' });
    }
  
    const newNote = {
      id: notes.length + 1, // simple ID generation
      title,
      message
    };
  
    notes.push(newNote);
    res.status(201).json(newNote);
  };
  
  // **PUT** - Update a note by ID
  const updateNote = (req, res) => {
    const { id } = req.params;
    const { title, message } = req.body;
  
    const noteIndex = notes.findIndex(note => note.id == id);
  
    if (noteIndex === -1) {
      return res.status(404).json({ message: 'Note not found' });
    }
  
    // Update the note
    notes[noteIndex] = { id: Number(id), title, message};
    res.status(200).json(notes[noteIndex]);
  };
  
  //  Delete a note by ID
  const deleteNote = (req, res) => {
    const { id } = req.params;
    const noteIndex = notes.findIndex(note => note.id == id);
  
    if (noteIndex === -1) {
      return res.status(404).json({ message: 'Note not found' });
    }
  
    notes.splice(noteIndex, 1);
    res.status(200).json({ message: 'Note deleted successfully' });
  };
  
  module.exports = { getAllNotes, getNoteById, createNote, updateNote, deleteNote };
  