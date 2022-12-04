export const Biochemical = (props) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="belok">Общ.белок</label>
        <div className="row">
          <div className="col">
            <input
              type="number"
              className="form-control"
              id="belok"
              {...props.register('belok')}
            />
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
            <input
              type="number"
              className="form-control"
              id="glukoza"
              {...props.register('glukoza')}
            />
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
            <input
              type="number"
              className="form-control"
              id="kreatinin"
              {...props.register('kreatinin')}
            />
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
            <input
              type="number"
              className="form-control"
              id="mochevina"
              {...props.register('mochevina')}
            />
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
            <input
              type="number"
              className="form-control"
              id="bilirubin"
              {...props.register('bilirubin')}
            />
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
