import { useState } from "react";

export const BgBC = (props) => {
  const [bgbc, setBGBC] = useState({
    type: "",
  });

  return (
    <>
      <div className="form-group">
        <label htmlFor="HBsAg">HBs Ag</label>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              id="HBsAg"
              {...props.register("HBsAg")}
            />
          </div>
          <div className="col-2">
            <span></span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="a-HCV">a-HCV</label>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              id="a-HCV"
              {...props.register("a_HCV")}
            />
          </div>
          <div className="col-2">
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};
