import mongoose from "mongoose";

const inspectionSchema = new mongoose.Schema({
    complaints: [{                                  // Жалобы при поступлении
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Complaints',
        required: true
    }],
    medicalHistory: [{                              // Анамнез заболевания
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MedicalHistory',
        required: true
    }],
    AnamnesisOfLife: [{                             //  Анамнез жизни
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AnamnesisOfLife',
        required: true
    }],
    AllergologicalHistory: [{                       // Аллергологический анамнез
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AllergologicalHistory',
        required: true
    }],
    PurposeOfHospitalization: [{                    // Цель госпитализации
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PurposeOfHospitalization',
        required: true
    }],
    lastSurvey: [{                                  // Последний обследование
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LastSurvey',
        required: true
    }],
    objectiveData: [{                               // Объективные данные
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ObjectiveData',
        required: true
    }],
    survey: [{                                      // Обследование
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Survey',
        required: true
    }],
    treatmentPlan: [{                               // Лечебный план
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TreatmentPlan',
        required: true
    }],
    other: [{                                       // Прочее
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Other',
        required: true
    }],
    underlyingDisease: [{                           // Основное заболевание
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UnderlyingDisease',
        required: true
    }],
    concomitantDisease: [{                          //Сопутствующее заболевание
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ConcomitantDisease',
        required: true
    }],
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
        required: false
    },
});

export default mongoose.model('Inspection', inspectionSchema);