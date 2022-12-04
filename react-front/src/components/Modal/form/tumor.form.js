export const Tumor = () => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="apf">АПФ</label>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" id="apf" />
          </div>
          <div className="col-2">
            <span>нг/мл</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="СА">СА</label>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" id="СА" />
          </div>
          <div className="col-2">
            <span>МЕ/мл</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="REA">РЭА</label>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" id="REA" />
          </div>
          <div className="col-2">
            <span>нг/мл</span>
          </div>
        </div>
      </div>
    </>
  )
}