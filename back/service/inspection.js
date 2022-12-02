
import Inspection from "../models/inspection.js";
import ApiError from '../exceptions/api-error.js';
import User from "../models/user-model.js";

class InspectionService {
    async createInspection(complaints, medicalHistory, AnamnesisOfLife, AllergologicalHistory, PurposeOfHospitalization,
        lastSurvey, objectiveData, survey, treatmentPlan, other, underlyingDisease, concomitantDisease, doctor, patient
    ) {
        const doctorId = await User.findById(doctor);
        const patientId = await User.findById(patient);
        const inspection = await Inspection.create(
            {
                complaints, medicalHistory, AnamnesisOfLife, AllergologicalHistory, PurposeOfHospitalization,
                lastSurvey, objectiveData, survey, treatmentPlan, other, underlyingDisease, concomitantDisease, doctor: doctorId, patient: patientId
            }
        );
        await inspection.save();

        return {
            id: inspection._id,
            complaints: inspection.complaints,
            medicalHistory: inspection.medicalHistory,
            AnamnesisOfLife: inspection.AnamnesisOfLife,
            AllergologicalHistory: inspection.AllergologicalHistory,
            PurposeOfHospitalization: inspection.PurposeOfHospitalization,
            lastSurvey: inspection.lastSurvey,
            objectiveData: inspection.objectiveData,
            survey: inspection.survey,
            treatmentPlan: inspection.treatmentPlan,
            other: inspection.other,
            underlyingDisease: inspection.underlyingDisease,
            concomitantDisease: inspection.concomitantDisease,
            doctor: {
                id: inspection.doctor._id,
                firstname: inspection.doctor.firstname,
                lastname: inspection.doctor.lastname,
                email: inspection.doctor.email,
            },
            patient: {
                id: inspection.patient._id,
                firstname: inspection.patient.firstname,
                lastname: inspection.patient.lastname,
                email: inspection.patient.email,
            },
            date: inspection.date,
        }
    };

    async getInspections() {
        const inspections = await Inspection.find().populate('doctor').populate('patient');
        return {
            inspections: inspections.map(inspection => {
                return {
                    id: inspection._id,
                    complaints: inspection.complaints,
                    medicalHistory: inspection.medicalHistory,
                    AnamnesisOfLife: inspection.AnamnesisOfLife,
                    AllergologicalHistory: inspection.AllergologicalHistory,
                    PurposeOfHospitalization: inspection.PurposeOfHospitalization,
                    lastSurvey: inspection.lastSurvey,
                    objectiveData: inspection.objectiveData,
                    survey: inspection.survey,
                    treatmentPlan: inspection.treatmentPlan,
                    other: inspection.other,
                    underlyingDisease: inspection.underlyingDisease,
                    concomitantDisease: inspection.concomitantDisease,
                    doctor: {
                        id: inspection.doctor._id,
                        firstname: inspection.doctor.firstname,
                        lastname: inspection.doctor.lastname,
                        email: inspection.doctor.email,
                    },
                    patient: {
                        id: inspection.patient._id,
                        firstname: inspection.patient.firstname,
                        lastname: inspection.patient.lastname,
                        email: inspection.patient.email,
                    },
                    date: inspection.date,
                }
            })
        }
    };

    async getInspectionById(id) {
        const inspection = await Inspection.findById(id).populate('doctor').populate('patient');
        if (!inspection) {
            throw ApiError.BadRequest('Inspection not found');
        }
        return {
            id: inspection._id,
            complaints: inspection.complaints,
            medicalHistory: inspection.medicalHistory,
            AnamnesisOfLife: inspection.AnamnesisOfLife,
            AllergologicalHistory: inspection.AllergologicalHistory,
            PurposeOfHospitalization: inspection.PurposeOfHospitalization,
            lastSurvey: inspection.lastSurvey,
            objectiveData: inspection.objectiveData,
            survey: inspection.survey,
            treatmentPlan: inspection.treatmentPlan,
            other: inspection.other,
            underlyingDisease: inspection.underlyingDisease,
            concomitantDisease: inspection.concomitantDisease,
            doctor: {
                id: inspection.doctor._id,
                firstname: inspection.doctor.firstname,
                lastname: inspection.doctor.lastname,
                email: inspection.doctor.email,
            },
            patient: {
                id: inspection.patient._id,
                firstname: inspection.patient.firstname,
                lastname: inspection.patient.lastname,
                email: inspection.patient.email,
            },
            date: inspection.date,
        }
    };

    async deleteInspection(id) {
        const inspection = await Inspection.findById(id);
        if (!inspection) {
            throw ApiError.BadRequest('Inspection not found');
        }
        await inspection.delete();
        return 'Inspection deleted';
    };
}

export default new InspectionService();
