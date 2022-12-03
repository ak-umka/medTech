import RightMenu from "components/RightMenu";
import MyRouter from "router/router";

function App() {
  return (
    <>
      <main className="main container-fluid">
        <div className="row">
          <div className="col-2">
            <RightMenu />
          </div>
          <div className="col py-3">
            <MyRouter />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
