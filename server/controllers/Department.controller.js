import Department from '../models/Department.js';

export const createDepartment = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Department name required" });
    }

    const exists = await Department.findOne({ name });
    if (exists) {
      return res.status(409).json({ message: "Department already exists" });
    }

    const dept = await Department.create({ name, description });

    res.status(201).json(dept);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find({ status: "active" });
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};