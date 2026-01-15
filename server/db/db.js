// server/db/db.js
import mongoose from 'mongoose';

const connectToDatabase = async () => {
  const uri = process.env.MONGODB_URL;
  if (!uri) throw new Error('MONGODB_URL not set in .env');

  await mongoose.connect(uri, {
    // options rarely needed with modern mongoose, but you can add if desired
  });

  console.log('MongoDB connected:', uri);
};

export default connectToDatabase;
