import mongoose from 'mongoose';

// Note Schema and Model
const NoteSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: String,
    content: String,
  },
  { timestamps: true, versionKey: false }
);

export const NoteModel = mongoose.model('notes', NoteSchema);
