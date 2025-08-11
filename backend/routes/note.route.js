import express from 'express';
import {
  deleteNote,
  getNotes,
  getSeedData,
  postNotes,
} from '../controllers/note.controller.js';

export const noteRouter = express.Router();

// Get all notes
noteRouter.get('/notes', getNotes);

// Get specific notes

// post note
noteRouter.post('/notes', postNotes);

// Update Notes

// Delete notes
noteRouter.delete('/notes', deleteNote);
// SEED DATA
noteRouter.get('/seedData', getSeedData);
