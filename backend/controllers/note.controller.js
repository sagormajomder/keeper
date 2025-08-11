import { NoteModel } from '../models/note.model.js';

// GEt all notes
export async function getNotes(req, res) {
  try {
    const notes = await NoteModel.find();

    if (notes.length > 0) {
      res.status(200).json({
        success: true,
        message: `Found total ${notes.length} note`,
        data: notes,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Notes not found. Please create some note',
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error,
    });
  }
}

// post Notes
export async function postNotes(req, res) {
  try {
    const note = await new NoteModel({
      id: req.body.id,
      title: req.body.title,
      content: req.body.content,
    }).save();

    res.status(201).json({
      success: true,
      message: 'Sucessfully note is created',
      data: note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      errorObj: error,
    });
  }
}

// Delete Notes
export async function deleteNote(req, res) {
  try {
    await NoteModel.deleteOne({ id: req.body.noteID });

    res.status(200).json({
      success: true,
      message: 'Successfully deleted a note',
      id: req.body.noteID,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      errorObj: error,
    });
  }
}

// SEED DATA
export async function getSeedData(req, res) {
  try {
    const seedData = await NoteModel.insertMany([
      {
        id: crypto.randomUUID(),
        title: 'Today is a great day',
        content: 'It is a sample text',
      },
      {
        id: crypto.randomUUID(),
        title: 'React is awesome',
        content: 'React allows us to build reusable UI components efficiently.',
      },
      {
        id: crypto.randomUUID(),
        title: 'JavaScript is powerful',
        content:
          'JavaScript is the backbone of web development and enables dynamic interactions.',
      },
      {
        id: crypto.randomUUID(),
        title: 'Stay consistent',
        content:
          'Consistency and practice are the keys to mastering any programming language.',
      },
    ]);

    res.status(200).json({
      success: true,
      message: 'Successfully seed data initialized',
      data: seedData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      errorObj: error,
    });
  }
}
