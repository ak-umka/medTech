import { useRef, useState } from "react";

function CreateRecordPage() {
  const complaints = useRef();

  const [tags, setTags] = useState({});

  const addTags = (event, ref) => {
    if (tags.hasOwnProperty(ref.current.name)) {
      setTags();
    }
    event.preventDefault();
  };

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
                  <label htmlFor="record-name" className="form-label">
                    Жалобы при поступлении
                  </label>
                  <div>
                    {/* {tags?.complaints.map} */}
                    <input
                      type="text"
                      className="form-control"
                      id="record-name"
                      name="complaints"
                      ref={complaints}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={(event) => addTags(event, complaints)}
                    >
                      Добавить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default CreateRecordPage;
