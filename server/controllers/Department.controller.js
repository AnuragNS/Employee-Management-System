import Department from '../models/Department.js';

export const createDepartment = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Name required' });
    }

    const exists = await Department.findOne({ name });
    if (exists) {
      return res.status(409).json({ message: 'Already exists' });
    }

    const dept = await Department.create({ name, description });
    res.status(201).json(dept);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getDepartments = async (req, res) => {
  const data = await Department.find({ status: 'active' });
  res.json(data);
};
