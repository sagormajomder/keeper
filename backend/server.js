import mongoose from 'mongoose';
import app from './app.js';

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/keeperDB';

// DB config
async function connectDB() {
  try {
    const isConnect = await mongoose.connect(DB_URL);
    if (isConnect) console.log('DB is connected successfully!');
  } catch (error) {
    console.log('DB is not connect');
    console.log('Error is: ', error);
    process.exit(1);
  }
}

// Server Create
app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  await connectDB();
});
