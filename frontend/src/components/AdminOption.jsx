import { Link } from "react-router-dom";

function AdminOption() {
  return (
    <div style={{ border: "1px solid black" }}>
      <h3 className="text-center p-4">Admin Option</h3>
      <div className="d-flex  justify-content-center align-items-center p-2">
        <div className="admin-card">
          <Link className="btn btn-primary" to="/addmovies">
            <i className="bi bi-file-earmark-plus-fill"></i> Add Movie
          </Link>
        </div>
        <div className="admin-card">
          <Link className="btn btn-primary" to="/yourmovies">
            <i className="bi bi-film"></i> Your Movies
          </Link>
        </div>
        <div className="admin-card">
          <Link className="btn btn-primary" to="/user-list">
            <i className="bi bi-people"></i> Users
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminOption;
