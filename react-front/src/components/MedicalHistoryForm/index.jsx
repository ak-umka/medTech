import TagInput from "components/TagInput";
import React, { useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { Controller } from "react-hook-form";

function MedicalHistoryForm({
  name = "medicalHistory",
  control = null,
  setValue,
}) {
  const [data, setData] = useState([
    {
      date: new Date(),
      content: {},
    },
  ]);

  const addContent = (id, content) => {
    const result = [...data];
    result[id].content = content;
    setData(result);
  };

  const setDate = (date, key) => {
    const result = [...data];
    result[key].date = date;
    setData(result);
  };

  const addYear = (event) => {
    event.preventDefault();
    const result = [...data];
    result.push({
      date: new Date(),
      content: {},
    });
    setData(result);
  };

  const removeData = (event, id) => {
    if (event.type === "click") {
      const result = [...data];
      result.splice(id, 1);
      setData(result);
    }
    event.preventDefault();
  };

  useEffect(() => {
    console.log(data);
    setValue(name, data);
  }, [data]);

  return (
    <>
      <Controller name={name} control={control} render={() => <></>} />
      <div className="row mb-3 gap-3">
        {data.map((item, key) => (
          <React.Fragment key={key}>
            <div className="col-12 d-flex border py-3 gap-3">
              <div className="col-1">
                <label className="form-label">Год</label>
                <DatePicker
                  className="form-control"
                  dateFormat="yyyy г."
                  selected={item.date}
                  onChange={(date) => setDate(date, key)}
                  showYearPicker
                />
              </div>
              <div className="col">
                <label className="form-label">Описание</label>
                <TagInput
                  module={key}
                  sendTags={addContent}
                  input={`medical-history-${key}`}
                />
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-danger bi bi-x-lg "
                  onClick={(event) => removeData(event, key)}
                />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="row ">
        <div className="col">
          <button className="btn btn-primary" onClick={addYear}>
            Добавить дату
          </button>
        </div>
      </div>
    </>
  );
}

export default MedicalHistoryForm;
