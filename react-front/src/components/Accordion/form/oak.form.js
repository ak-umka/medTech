export const OAK = (props) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="nv">Нв</label>
        <div className="row">
          <div className="col">
            <input
              type="number"
              className="form-control"
              id="nv"
              {...props.register('nv')}
            />
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
            <input
              type="number"
              className="form-control"
              id="erit"
              {...props.register('erit')}
            />
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
            <input
              type="number"
              className="form-control"
              id="Ht"
              {...props.register('Ht')}
            />
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
            <input
              type="number"
              className="form-control"
              id="leikotcit"
              {...props.register('leikotcit')}
            />
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
            <input
              type="number"
              className="form-control"
              id="tromb"
              {...props.register('tromb')}
            />
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
            <input
              type="number"
              className="form-control"
              id="eoziofil"
              {...props.register('eoziofil')}
            />
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
            <input
              type="number"
              className="form-control"
              id="monocit"
              {...props.register('monocit')}
            />
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
            <input
              type="number"
              className="form-control"
              id="limfocit"
              {...props.register('limfocit')}
            />
          </div>
          <div className="col-2">*10/9</div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="soe">СОЭ</label>
        <div className="row">
          <div className="col">
            <input
              type="number"
              className="form-control"
              id="soe"
              {...props.register('soe')}
            />
          </div>
          <div className="col-2">
            <span>мм/ч</span>
          </div>
        </div>
      </div>
    </>
  )
}
