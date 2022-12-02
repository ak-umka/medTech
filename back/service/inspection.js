
import Inspection from "../models/inspection.js";
import ApiError from '../exceptions/api-error.js';

class InspectionService {
    async createInspection(doctor, patient) {
        const inspection = await Inspection.create({ doctor, patient });
        await inspection.save();
        return {
            id: inspection._id,
            doctor: {
                id: doctor._id,
                firstname: doctor.firstname,
                lastname: doctor.lastname,
                email: doctor.email,
            },
            patient: {
                id: patient._id,
                firstname: patient.firstname,
                lastname: patient.lastname,
                email: patient.email,
            },
        }
    };

    async getInspections() {
        const inspections = await Inspection.find().populate('doctor').populate('patient');
        return {
            inspections: inspections.map(inspection => {
                return {
                    id: inspection._id,
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
