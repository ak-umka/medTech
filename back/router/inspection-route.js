import { Router } from 'express';
import { body } from 'express-validator';
import express from 'express';

import InspectionController from '../controllers/inspection-controller.js';

const router = new Router();

router.post('/createInspection', express.json(), InspectionController.createInspection);
router.get('/inspection', express.json(), InspectionController.getInspections);
router.get('/inspection/:id', express.json(), InspectionController.getInspectionById);
router.delete('/inspection/:id', express.json(), InspectionController.deleteInspection);

export default router;