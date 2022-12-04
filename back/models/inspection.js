import mongoose from "mongoose";

const inspectionSchema = new mongoose.Schema({
    complaints: {                                  // Жалобы при поступлении
        tags: [{
            type: String,
            required: false
        }],
        text: {
            type: String,
            required: false
        }
    },
    medicalHistory: {                              // Анамнез заболевания
        tags: [{
            type: String,
            required: false
        }],
        text: {
            type: String,
            required: false
        }
    },
    AnamnesisOfLife: {                             //  Анамнез жизни
        tags: [{
            type: String,
            required: false
        }],
        text: {
            type: String,
            required: false
        }
    },
    AllergologicalHistory: {                       // Аллергологический анамнез
        tags: [{
            type: String,
            required: false
        }],
        text: {
            type: String,
            required: false
        }
    },
    PurposeOfHospitalization: {                    // Цель госпитализации
        tags: [{
            type: String,
            required: false
        }],
        text: {
            type: String,
            required: false
        }
    },
    lastSurvey: {                                  // Последний обследование
        tags: [{
            type: String,
            required: false
        }],
        text: {
            type: String,
            required: false
        }
    },
    objectiveData: {                               // Объективные данные
        tags: [{
            type: String,
            required: false
        }],
        text: {
            type: String,
            required: false
        }
    },
    survey: {                                      // Обследование
        tags: [{
            type: String,
            required: false
        }],
        text: {
            type: String,
            required: false
        }
    },
    treatmentPlan: {                               // Лечебный план
        tags: [{
            type: String,
            required: false
        }],
        text: {
            type: String,
            required: false
        }
    },
    other: {                                       // Прочее
        tags: [{
            type: String,
            required: false
        }],
        text: {
            type: String,
            required: false
        }
    },
    underlyingDisease: {                           // Основное заболевание
        tags: [{
            type: String,
            required: false
        }],
        text: {
            type: String,
            required: false
        }
    },
    concomitantDisease: {                          //Сопутствующее заболевание
        tags: [{
            type: String,
            required: false
        }],
        text: {
            type: String,
            required: false
        }
    },
    doctor: {                                      //Врач
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    patient: {                                     //Пациент
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    date: {                                         //Дата
        type: Date,
        default: Date.now
    },

});

export default mongoose.model('Inspection', inspectionSchema);