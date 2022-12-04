import { validationResult } from 'express-validator';

import Inspection from '../service/inspection.js';
import User from '../models/user-model.js';
import ApiError from "../exceptions/api-error.js";

class InspectionController {
    async createInspection(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation error', errors.array()));
            }
            const {
                complaints, medicalHistory, AnamnesisOfLife, AllergologicalHistory, PurposeOfHospitalization,
                lastSurvey, objectiveData, survey, treatmentPlan, other, underlyingDisease, concomitantDisease,
                doctorId, patientId
            } = req.body;
            const inspection = await Inspection.createInspection(
                complaints, medicalHistory, AnamnesisOfLife, AllergologicalHistory, PurposeOfHospitalization,
                lastSurvey, objectiveData, survey, treatmentPlan, other, underlyingDisease, concomitantDisease,
                doctorId, patientId);
            return res.json(inspection);
        } catch (error) {
            next(error);
        }
    };

    async getInspections(req, res, next) {
        try {
            const inspections = await Inspection.getInspections();
            return res.json(inspections);
        } catch (error) {
            next(error);
        }
    };

    async getInspectionById(req, res, next) {
        try {
            const inspection = await Inspection.getInspectionById(req.params.id);
            return res.json(inspection);
        } catch (error) {
            next(error);
        }
    };

    async deleteInspection(req, res, next) {
        try {
            const inspection = await Inspection.deleteInspection(req.params.id);
            return res.json(inspection);
        } catch (error) {
            next(error);
        }
    };
}

export default new InspectionController();