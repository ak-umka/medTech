export const Coagulogram = (props) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="achtv">АЧТВ</label>
        <div className="row">
          <div className="col">
            <input
              type="number"
              className="form-control"
              id="achtv"
              {...props.register('achtv')}
            />
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
            <input
              type="number"
              className="form-control"
              id="PV"
              {...props.register('PV')}
            />
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
            <input
              type="number"
              className="form-control"
              id="mno"
              {...props.register('mno')}
            />
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
            <input
              type="number"
              className="form-control"
              id="pti"
              {...props.register('pti')}
            />
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
            <input
              type="number"
              className="form-control"
              id="fibrinogen"
              {...props.register('fibrinogen')}
            />
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
            <input
              type="number"
              className="form-control"
              id="alt"
              {...props.register('alt')}
            />
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
            <input
              type="number"
              className="form-control"
              id="hs"
              {...props.register('hs')}
            />
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
            <input
              type="number"
              className="form-control"
              id="ast"
              {...props.register('ast')}
            />
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
            <input
              type="number"
              className="form-control"
              id="kalcii"
              {...props.register('kalcii')}
            />
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
            <input
              type="number"
              className="form-control"
              id="kalii"
              {...props.register('kalii')}
            />
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
            <input
              type="number"
              className="form-control"
              id="natrii"
              {...props.register('natrii')}
            />
          </div>
          <div className="col-2">ммоль/л</div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="albumin">Альбумин</label>
        <div className="row">
          <div className="col">
            <input
              type="number"
              className="form-control"
              id="albumin"
              {...props.register('albumin')}
            />
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
            <input
              type="number"
              className="form-control"
              id="ferritin"
              {...props.register('ferritin')}
            />
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
            <input
              type="number"
              className="form-control"
              id="srb"
              {...props.register('srb')}
            />
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
            <input
              type="number"
              className="form-control"
              id="shf"
              {...props.register('shf')}
            />
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
            <input
              type="number"
              className="form-control"
              id="ggtp"
              {...props.register('ggtp')}
            />
          </div>
          <div className="col-2">
            <span>Ед/л</span>
          </div>
        </div>
      </div>
    </>
  )
}
