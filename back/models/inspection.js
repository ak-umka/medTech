import mongoose from "mongoose";

const inspectionSchema = new mongoose.Schema({
    complaints: {                                  // Жалобы при поступлении
        tags: [{
            type: String,
            required: true
        }],
        text: {
            type: String,
            required: true
        }
    },
    medicalHistory: {                              // Анамнез заболевания
        tags: [{
            type: String,
            required: true
        }],
        text: {
            type: String,
            required: true
        }
    },
    AnamnesisOfLife: {                             //  Анамнез жизни
        tags: [{
            type: String,
            required: true
        }],
        text: {
            type: String,
            required: true
        }
    },
    AllergologicalHistory: {                       // Аллергологический анамнез
        tags: [{
            type: String,
            required: true
        }],
        text: {
            type: String,
            required: true
        }
    },
    PurposeOfHospitalization: {                    // Цель госпитализации
        tags: [{
            type: String,
            required: true
        }],
        text: {
            type: String,
            required: true
        }
    },
    lastSurvey: {                                  // Последний обследование
        tags: [{
            type: String,
            required: true
        }],
        text: {
            type: String,
            required: true
        }
    },
    objectiveData: {                               // Объективные данные
        tags: [{
            type: String,
            required: true
        }],
        text: {
            type: String,
            required: true
        }
    },
    survey: {                                      // Обследование
        tags: [{
            type: String,
            required: true
        }],
        text: {
            type: String,
            required: true
        }
    },
    treatmentPlan: {                               // Лечебный план
        tags: [{
            type: String,
            required: true
        }],
        text: {
            type: String,
            required: true
        }
    },
    other: {                                       // Прочее
        tags: [{
            type: String,
            required: true
        }],
        text: {
            type: String,
            required: true
        }
    },
    underlyingDisease: {                           // Основное заболевание
        tags: [{
            type: String,
            required: true
        }],
        text: {
            type: String,
            required: true
        }
    },
    concomitantDisease: {                          //Сопутствующее заболевание
        tags: [{
            type: String,
            required: true
        }],
        text: {
            type: String,
            required: true
        }
    },
    doctor: {                                      //Врач
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    patient: {                                     //Пациент
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {                                         //Дата
        type: Date,
        default: Date.now
    },

});

export default mongoose.model('Inspection', inspectionSchema);