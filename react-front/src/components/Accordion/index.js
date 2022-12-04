import { useForm } from "react-hook-form";
import { OAK } from "./form/oak.form";
import { Biochemical } from "./form/biochemical.form";
import { OAM } from "./form/oam.form";
import { Coagulogram } from "./form/coagulogram.form";
import { BgBC } from "./form/bgBC.form";
import { Tumor } from "./form/tumor.form";

function Accordion() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, event) => {
    console.log(data);
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-8">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item m-2">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    ОАК
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <OAK register={register} />
                  </div>
                </div>
              </div>

              <div class="accordion-item m-2">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Биохимическиеанализы крови
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <Biochemical register={register} />
                  </div>
                </div>
              </div>

              <div class="accordion-item m-2">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    OAM
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <OAM register={register} />
                  </div>
                </div>
              </div>

              <div class="accordion-item m-2">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Кровь на микрореакцию
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="form-group">
                      <div className="row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            id="microreaction"
                            {...register("microreaction")}
                          />
                        </div>
                        <div className="col-2">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion-item m-2">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Кал
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="form-group">
                      <div className="row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            id="kal"
                            {...register("kal")}
                          />
                        </div>
                        <div className="col-2">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion-item m-2">
                <h2 class="accordion-header" id="headingSix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    ИФА на ВИЧ
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="form-group">
                      <div className="row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            id="vich"
                            {...register("vich")}
                          />
                        </div>
                        <div className="col-2">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion-item m-2">
                <h2 class="accordion-header" id="headingSeven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    Рентген ОГК
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="form-group">
                      <div className="row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            id="rentgen"
                            {...register("rentgen")}
                          />
                        </div>
                        <div className="col-2">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion-item m-2">
                <h2 class="accordion-header" id="headingEight">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    ЭКГ
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingEight"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="form-group">
                      <div className="row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            id="ekg"
                            {...register("ekg")}
                          />
                        </div>
                        <div className="col-2">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion-item m-2">
                <h2 class="accordion-header" id="headingNine">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    Коагулограмма
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingNine"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <Coagulogram register={register} />
                  </div>
                </div>
              </div>

              <div class="accordion-item m-2">
                <h2 class="accordion-header" id="headingTen">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                  >
                    ANCA, ASCA
                  </button>
                </h2>
                <div
                  id="collapseTen"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTen"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="form-group">
                      <div className="row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            id="anca"
                            {...register("anca")}
                          />
                        </div>
                        <div className="col-2">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion-item m-2">
                <h2 class="accordion-header" id="headingEleven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEleven"
                    aria-expanded="false"
                    aria-controls="collapseEleven"
                  >
                    ИФА на маркеры ВГ Ви С
                  </button>
                </h2>
                <div
                  id="collapseEleven"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingEleven"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <BgBC register={register} />
                  </div>
                </div>
              </div>

              <div class="accordion-item m-2">
                <h2 class="accordion-header" id="headingTwelve">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwelve"
                    aria-expanded="false"
                    aria-controls="collapseTwelve"
                  >
                    Онкомаркеры
                  </button>
                </h2>
                <div
                  id="collapseTwelve"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwelve"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <Tumor register={register} />
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary m-2">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Accordion;
