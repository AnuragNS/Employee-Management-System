import 'dotenv/config';
import bcrypt from 'bcrypt';
import User from './models/User.js';
import connectToDatabase from './db/db.js';

const seedAdmin = async () => {
  try {
    await connectToDatabase();

    const existingUser = await User.findOne({ email: "admin@gmail.com" });

    if (existingUser) {
      console.log("Admin user already exists");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("admin", 10);

    await User.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin"
    });

    console.log("Admin user created successfully");
    process.exit(0);

  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
};

seedAdmin();
