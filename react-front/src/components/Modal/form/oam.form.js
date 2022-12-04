export const OAM = () => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="ves">Уд. вес</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="ves" />
          </div>
          <div className="col-2">
            <span></span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="РН">РН</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="РН" />
          </div>
          <div className="col-2">
            <span></span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="color">цвет</label>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" id="color" />
          </div>
          <div className="col-2">
            <span></span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="belok">белок</label>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" id="belok" />
          </div>
          <div className="col-2">
            <span></span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="leikocit">лейкоциты</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="leikocit" />
          </div>
          <div className="col-2">
            <span></span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="eritnotchange">эрит.неизм</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="eritnotchange" />
          </div>
          <div className="col-2">
            <span></span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="plepit">пл.эпит</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="plepit" />
          </div>
          <div className="col-2">
            <span>в п/з</span>
          </div>
        </div>
      </div>
    </>
  )
}
