import cors from 'cors';
import express from 'express';
import { noteRouter } from './routes/note.route.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to home route',
  });
});

// Note Router
app.use('/api/v1', noteRouter);

// Resource not found Route
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Invalid route. Resources not found',
  });

  next();
});

// Server Error Route
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error. Something broke.',
    error: err,
  });
});

export default app;
