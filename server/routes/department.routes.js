import express from 'express';

import { createDepartment, getDepartments } from '../controllers/Department.controller.js';

const router = express.Router();

// Create department (protected route)
router.post('/',  createDepartment);

// Get all departments
router.get('/',  getDepartments);

export default router;