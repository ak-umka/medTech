import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
function TagForm({
  inputId = "inputId",
  label = "Label",
  btnText = "Добавить",
  inputName = "inputName",
  type = "text",
  inputType = "input",
  control,
  setValue,
}) {
  const tagInput = useRef();
  const tagRef = useRef();
  const [tags, setTags] = useState([]);
  const [text, setText] = useState("");
  const [editedTag, setEditedTag] = useState(null);

  const addTag = (event, ref) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      if (ref.current.value === "") return;
      const result = [...tags];
      result.push(ref.current.value);
      setTags(result);
      ref.current.value = "";
    }
  };

  const removeTag = (event, id) => {
    if (event.type === "click") {
      const result = [...tags];
      result.splice(id, 1);
      setTags(result);
    }
    setEditedTag(null);
    event.preventDefault();
  };

  const editTag = (event, id) => {
    setEditedTag(id);
    event.preventDefault();
  };

  const saveTag = (event, newTag, id) => {
    if (event.key === "Enter" || event.type === "click") {
      console.log(event);

      if (newTag.current.id == id) {
        if (newTag.current.innerText === "") {
          removeTag(event, id);
        } else {
          const result = [...tags];
          result[id] = newTag.current.innerText;
          setTags(result);
        }
        setEditedTag(null);
      }
      event.preventDefault();
    }
  };

  useEffect(() => {
    console.log(tags);
    setText(tags.join(", "));
    setValue(inputName, {
      tags: tags,
      text: text,
    });
  }, [tags, text]);

  useEffect(() => {
    if (!editedTag) return;
    tagRef.current.focus();
  }, [editedTag]);

  return (
    <>
      <Controller name={inputName} control={control} render={() => <></>} />
      <label htmlFor="record-name" className="form-label">
        {label}
      </label>
      <div className="row">
        {tags.length ? (
          <div className="col-12 d-flex flex-wrap gap-1 mb-2 ">
            {tags?.map((item, key) => (
              <React.Fragment key={key}>
                <div
                  className={`rounded-2 d-flex overflow-hidden ${
                    editedTag === key ? "bg-light" : "bg-primary text-light "
                  }   `}
                >
                  <p
                    id={key}
                    className={`m-0 py-1 px-2 ${
                      editedTag === key
                        ? "form-control rounded-start rounded-0"
                        : ""
                    }`}
                    contentEditable={editedTag === key ? "true" : "false"}
                    ref={editedTag === key ? tagRef : null}
                    onKeyDown={(event) => saveTag(event, tagRef, key)}
                    onBlur={(event) => saveTag(event, tagRef, key)}
                  >
                    {item}
                  </p>
                  {editedTag === key ? (
                    <div
                      className="bi bi-check-lg px-2 h-100 d-flex align-items-center bg-success text-light "
                      onClick={(event) => saveTag(event, tagRef, key)}
                    ></div>
                  ) : (
                    <div
                      className="bi bi-pencil px-2 h-100 d-flex align-items-center bg-warning text-light"
                      onClick={(event) => editTag(event, key)}
                    ></div>
                  )}

                  <div
                    className="bi bi-x-lg px-2 h-100 d-flex align-items-center bg-danger text-light"
                    onClick={(event) => removeTag(event, key)}
                  ></div>
                </div>
              </React.Fragment>
            ))}
          </div>
        ) : null}
        <div className="col-12 d-flex gap-2">
          <input
            type={type}
            className="form-control"
            id={inputId}
            name={inputName}
            ref={tagInput}
            onKeyDownCapture={(event) => addTag(event, tagInput)}
          />
          <button
            className="btn btn-primary"
            onClick={(event) => addTag(event, tagInput)}
          >
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}

export default TagForm;
