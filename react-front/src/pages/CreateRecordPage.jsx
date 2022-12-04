import CustomTextArea from "components/CustomTextarea";
import TagForm from "components/TagForm";
// import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

function CreateRecordPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    setValue,
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <section className="create-records">
        <div className="container-fluid">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="record-name" className="form-label">
                    Название
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="record-name"
                    {...register("recordName")}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="record-patient" className="form-label">
                    Пациент
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="record-patient"
                    {...register("record-patient")}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="record-doctor" className="form-label">
                    Врач
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="record-doctor"
                    {...register("record-doctor")}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="record-data" className="form-label">
                    Дата
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="record-data"
                    {...register("record-data")}
                  />
                </div>
                <div className="mb-3">
                  <TagForm
                    inputId="complaintsOnAdmission"
                    label="Жалобы при поступлении"
                    inputName="complaintsOnAdmission"
                    control={control}
                    setValue={setValue}
                  />
                </div>
                <div className="mb-3">
                  <TagForm
                    inputId="medicalHistory"
                    label="Анамнез заболевания"
                    inputName="medicalHistory"
                    control={control}
                    setValue={setValue}
                  />
                </div>
                <div className="mb-3">
                  <TagForm
                    inputId="anamnesisOfLife"
                    label="Анамнез жизни"
                    inputName="anamnesisOfLife"
                    control={control}
                    setValue={setValue}
                  />
                </div>
                <div className="mb-3">
                  <TagForm
                    inputId="allergologicalHistory"
                    label="Аллергологический анамнез"
                    inputName="allergologicalHistory"
                    control={control}
                    setValue={setValue}
                  />
                </div>
                <div className="mb-3">
                  <TagForm
                    inputId="objectiveData"
                    label="Объективные данные"
                    inputName="objectiveData"
                    control={control}
                    setValue={setValue}
                  />
                </div>
                <div className="mb-3">
                  <TagForm
                    inputId="survey"
                    label="Обследование"
                    inputName="survey"
                    control={control}
                    setValue={setValue}
                  />
                </div>
                <div className="mb-3">
                  <TagForm
                    inputId="treatmentPlan"
                    label="План лечения"
                    inputName="treatmentPlan"
                    control={control}
                    setValue={setValue}
                  />
                </div>
                <div className="mb-3">
                  <TagForm
                    inputId="other"
                    label="Прочее"
                    inputName="other"
                    control={control}
                    setValue={setValue}
                  />
                </div>
                <div className="mb-3">
                  <TagForm
                    inputId="underlyingDisease"
                    label="Основное заболевание"
                    inputName="underlyingDisease"
                    control={control}
                    setValue={setValue}
                  />
                </div>
                <div className="mb-3">
                  <TagForm
                    inputId="concomitantDisease"
                    label="Сопутствующее заболевание"
                    inputName="concomitantDisease"
                    control={control}
                    setValue={setValue}
                  />
                </div>
                <div className="mb-3 d-flex">{/* <CustomTextArea /> */}</div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button type="submit" className="btn btn-primary">
                  Отправить
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default CreateRecordPage;
