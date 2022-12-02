import mongoose from "mongoose";

const inspectionSchema = new mongoose.Schema({
    complaints: {                                  // Жалобы при поступлении
        type: String,
        required: true
    },
    medicalHistory: {                              // Анамнез заболевания
        type: String,
        required: true
    },
    AnamnesisOfLife: {                             //  Анамнез жизни
        type: String,
        required: true
    },
    AllergologicalHistory: {                       // Аллергологический анамнез
        type: String,
        required: true
    },
    PurposeOfHospitalization: {                    // Цель госпитализации
        type: String,
        required: true
    },
    lastSurvey: {                                  // Последний обследование
        type: String,
        required: true
    },
    objectiveData: {                               // Объективные данные
        type: String,
        required: true
    },
    survey: {                                      // Обследование
        type: String,
        required: true
    },
    treatmentPlan: {                               // Лечебный план
        type: String,
        required: true
    },
    other: {                                       // Прочее
        type: String,
        required: true
    },
    underlyingDisease: {                           // Основное заболевание
        type: String,
        required: true
    },
    concomitantDisease: {                          //Сопутствующее заболевание
        type: String,
        required: true
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