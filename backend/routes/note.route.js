import express from 'express';
import { getNotes, postNotes } from '../controllers/note.controller.js';

export const noteRouter = express.Router();

// Get all notes
noteRouter.get('/notes', getNotes);

// Get specific notes

// post note
noteRouter.post('/notes', postNotes);

// Update Notes

// Delete notes
