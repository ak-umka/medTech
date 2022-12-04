export const Biochemical = () => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="belok">Общ.белок</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="belok" />
          </div>
          <div className="col-2">
            <span>г/л</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="glukoza">Глюкоза</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="glukoza" />
          </div>
          <div className="col-2">
            <span>ммоль/л</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="kreatinin">креатинин</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="kreatinin" />
          </div>
          <div className="col-2">
            <span>мкмоль/л</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="mochevina">мочевина</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="mochevina" />
          </div>
          <div className="col-2">
            <span>ммоль/л</span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="bilirubin">Общий билирубин</label>
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" id="bilirubin" />
          </div>
          <div className="col-2">
            <span>ммоль/л</span>
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
