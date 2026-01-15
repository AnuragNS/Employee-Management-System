import 'dotenv/config';           // Load .env file
import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.js';
import connectToDatabase from './db/db.js'; // Your DB connection file

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

// Default route
app.get('/', (req, res) => res.send('Server running'));

// Start server AFTER connecting to DB
const startServer = async () => {
  try {
    await connectToDatabase(); // IMPORTANT
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Server start error:', error);
    process.exit(1);
  }
};

startServer();
