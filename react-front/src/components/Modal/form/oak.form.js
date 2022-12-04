export const OAK = () => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="nv">Нв</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="nv" />
          </div>
          <div className="col-2">
            <span>г/л</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="erit">эрит</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="erit" />
          </div>
          <div className="col-2">
            <span>*s</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="Ht">Ht</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="Ht" />
          </div>
          <div className="col-2">
            <span>%</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="leikotcit">лейкоциты</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="leikotcit" />
          </div>
          <div className="col-2">
            <span>*10/9</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="tromb">тромб</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="tromb" />
          </div>
          <div className="col-2">
            <span>*10/9 л</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="eoziofil">эозинофилы</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="eoziofil" />
          </div>
          <div className="col-2">
            <span>*10/9</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="monocit">моноциты</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="monocit" />
          </div>
          <div className="col-2">
            <span>*10/9</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="limfocit">лимфоциты</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="limfocit" />
          </div>
          <div className="col-2">*10/9</div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="soe">СОЭ</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="soe" />
          </div>
          <div className="col-2">
            <span>мм/ч</span>
          </div>
        </div>
      </div>
    </>
  )
}
