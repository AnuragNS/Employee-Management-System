import 'dotenv/config';
import bcrypt from 'bcrypt';
import User from './models/User.js';
import connectToDatabase from './db/db.js';

const seedUsers = async () => {
  try {
    await connectToDatabase();

    const users = [
      {
        name: "Admin",
        email: "admin@gmail.com",
        password: "admin",
        role: "admin"
      },
      {
        name: "Employee",
        email: "employee@gmail.com",
        password: "employee",
        role: "employee"
      }
    ];

    for (const user of users) {
      const existingUser = await User.findOne({ email: user.email });

      if (existingUser) {
        console.log(`${user.role} already exists`);
        continue;
      }

      const hashedPassword = await bcrypt.hash(user.password, 10);

      await User.create({
        name: user.name,
        email: user.email,
        password: hashedPassword,
        role: user.role
      });

      console.log(`${user.role} created successfully`);
    }

    process.exit(0);

  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
};

seedUsers();
