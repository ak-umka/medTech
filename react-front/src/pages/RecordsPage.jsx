import RecordsTable from "components/RecordsTable";
import { Link } from "react-router-dom";

function RecordsPage() {
  return (
    <>
      <main className="records">
        <div className=" container-fluid">
          <div className="row">
            <h1>Записи</h1>
          </div>
          <div className="row">
            <div className="col">
              <Link to="create" className="btn btn-primary">
                Создать запись
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <RecordsTable />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default RecordsPage;
