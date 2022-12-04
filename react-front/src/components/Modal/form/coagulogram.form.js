export const Coagulogram = () => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="achtv">АЧТВ</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="achtv" />
          </div>
          <div className="col-2">
            <span>сек</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="PV">ПВ</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="PV" />
          </div>
          <div className="col-2">
            <span>сек</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="mno">МНО</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="mno" />
          </div>
          <div className="col-2">
            <span></span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="pti">ПТИ</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="pti" />
          </div>
          <div className="col-2">
            <span>%</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="fibrinogen">Фибриноген</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="fibrinogen" />
          </div>
          <div className="col-2">
            <span>г/л</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="alt">АЛТ</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="alt" />
          </div>
          <div className="col-2">
            <span></span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="hs">ХС</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="hs" />
          </div>
          <div className="col-2">
            <span></span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="ast">АСТ</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="ast" />
          </div>
          <div className="col-2">
            <span></span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="kalcii">Кальций</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="kalcii" />
          </div>
          <div className="col-2">
            <span>ммоль/л</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="kalii">Калий</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="kalii" />
          </div>
          <div className="col-2">
            <span>ммоль/л</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="natrii">Натрий</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="natrii" />
          </div>
          <div className="col-2">ммоль/л</div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="albumin">Альбумин</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="albumin" />
          </div>
          <div className="col-2">
            <span></span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="ferritin">Ферритин</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="ferritin" />
          </div>
          <div className="col-2">
            <span>нг/мл</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="srb">СРБ</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="srb" />
          </div>
          <div className="col-2">
            <span>мг/л</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="shf">ЩФ</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="shf" />
          </div>
          <div className="col-2">
            <span>Ед/л</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="ggtp">ГГТП</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="ggtp" />
          </div>
          <div className="col-2">
            <span>Ед/л</span>
          </div>
        </div>
      </div>
    </>
  )
}
