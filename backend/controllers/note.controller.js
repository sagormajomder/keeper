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
