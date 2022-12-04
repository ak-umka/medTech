import { Link } from "react-router-dom";

function RightMenu() {
  return (
    <>
      <section className="rightMenu">
        <div className=" container-fluid py-3 border-end min-vh-100">
          <div className="row flex-column fs-5 gap-2">
            <div className="col">
              <Link to="/" className="text-decoration-none text-dark">
                Home
              </Link>
            </div>
            <div className="col">
              <Link to="/login" className="text-decoration-none text-dark">
                Login
              </Link>
            </div>
            <div className="col">
              <Link to="/register" className="text-decoration-none text-dark">
                Register
              </Link>
            </div>
            <div className="col">
              <Link to="/records" className="text-decoration-none text-dark">
                Records
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RightMenu;
