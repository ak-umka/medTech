import TagForm from 'components/TagForm'
import React, { useEffect, useRef, useState } from 'react'

function CreateRecordPage() {
  // const complaints = useRef();

  // const [tags, setTags] = useState({});

  // const addTag = (event, ref) => {
  //   if (event.key === "Enter" || event.type === "click") {
  //     event.preventDefault();
  //     if (ref.current.value === "") return;
  //     if (tags.hasOwnProperty(ref.current.name)) {
  //       const result = { ...tags };
  //       console.log(result[ref.current.name]);
  //       result[ref.current.name].push(ref.current.value);
  //       setTags(result);
  //     } else {
  //       const result = { ...tags };
  //       result[ref.current.name] = [ref.current.value];
  //       setTags(result);
  //     }
  //     ref.current.value = "";
  //     event.preventDefault();
  //   }
  // };

  // const removeTag = (event, ref, id) => {
  //   if (event.type === "click") {
  //     var result = { ...tags };
  //     result[ref.current.name].splice(id, 1);
  //     console.log(result);
  //     setTags(result);
  //   }
  // };

  // useEffect(() => {
  //   console.log(tags);
  // }, [tags]);

  return (
    <>
      <section className="create-records">
        <div className="container-fluid">
          <form>
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
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="record-name" className="form-label">
                    Пациент
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="record-name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="record-name" className="form-label">
                    Врач
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="record-name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="record-name" className="form-label">
                    Дата
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="record-name"
                  />
                </div>
                <div className="mb-3">
                  <TagForm />
                  {/* <label htmlFor="record-name" className="form-label">
                    Жалобы при поступлении
                  </label>
                  <div className="row ">
                    <div className="col-12 d-flex flex-wrap gap-1 mb-2">
                      {tags?.complaints?.map((item, key) => (
                        <React.Fragment key={key}>
                          <div className="bg-primary rounded-2 text-light d-flex">
                            <p className="m-0 py-1 px-2">{item}</p>
                            <div
                              className="bi bi-x-lg px-2 h-100 d-flex align-items-center"
                              onClick={(event) =>
                                removeTag(event, complaints, key)
                              }
                            ></div>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="col-12 d-flex gap-2">
                      <input
                        type="text"
                        className="form-control"
                        id="record-name"
                        name="complaints"
                        ref={complaints}
                        onKeyDownCapture={(event) => addTag(event, complaints)}
                      />
                      <button
                        className="btn btn-primary"
                        onClick={(event) => addTag(event, complaints)}
                      >
                        Добавить
                      </button>
                    </div>
                  </div> */}
                </div>
                <div className="mb-3">
                  <TagForm />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default CreateRecordPage
