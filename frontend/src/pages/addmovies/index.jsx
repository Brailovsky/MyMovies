import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContextState } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import "./style.css";
function AddMovies() {
  const { token, userdata } = useContext(AuthContextState);
  const navigateTo = useNavigate();
  useEffect(() => {
    if (!token) {
      navigateTo("/login");
    }
    if (userdata?.role !== "admin") {
      toast.error("You are not admin.");
      navigateTo("/home");
    }
    document.title = "Add Movies";
  }, [token]);

  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [runtime, setRuntime] = useState("");
  const [genre, setGenre] = useState("");
  const [overview, setOverview] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("released");
  const [actors, setActors] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("photo", file);
    formData.append("runtime", runtime);
    formData.append("genre", genre);
    formData.append("overview", overview);
    formData.append("director", director);
    formData.append("year", year);
    formData.append("description", description);
    formData.append("status", status);
    formData.append("actors", actors);

    console.log(formData);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/add-movie",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };

  return (
    <div className="signupbox" style={{ maxWidth: "500px", margin: "auto" }}>
      <div className="panel panel-info">
        <div className="panel-body">
          <form method="post" onSubmit={handleSubmit}>
            <div className="form-group required">
              <label className="control-label   requiredField">
                Movie Status<span className="asteriskField">*</span>
              </label>
              <div className="controls  ">
                <select
                  className="input-md  textinput textInput form-control"
                  id="status"
                  name="status"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="released">Released</option>
                  <option value="upcoming">Upcomming</option>
                </select>
              </div>
            </div>

            <div className="form-group required">
              <label className="control-label col-md-4  requiredField">
                Title<span className="asteriskField">*</span>
              </label>
              <div className="controls  ">
                <input
                  className="input-md  textinput textInput form-control"
                  id="title"
                  maxLength={30}
                  name="title"
                  placeholder="ie. The Shawshank Redemption"
                  onKeyUp={(e) => setTitle(e.target.value)}
                  style={{ marginBottom: "10px" }}
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-md-4  requiredField">
                Genre
              </label>
              <div className="controls  ">
                <input
                  className="input-md  textinput textInput form-control"
                  id="genre"
                  name="genre"
                  placeholder="multiple genres should be seperated by comma. ie. Action,Thriller"
                  onKeyUp={(e) => setGenre(e.target.value)}
                  style={{ marginBottom: "10px" }}
                  type="text"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-md-4  requiredField">
                Runtime
              </label>
              <div className="controls  ">
                <input
                  className="input-md  textinput textInput form-control"
                  id="runtime"
                  name="runtime"
                  placeholder="In minutes, ie. 120"
                  onKeyUp={(e) => setRuntime(e.target.value)}
                  style={{ marginBottom: "10px" }}
                  type="text"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-md-4  requiredField">
                Year
              </label>
              <div className="controls  ">
                <input
                  className="input-md  textinput textInput form-control"
                  id="year"
                  name="year"
                  placeholder="ie. 1994"
                  onKeyUp={(e) => setYear(e.target.value)}
                  style={{ marginBottom: "10px" }}
                  type="text"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-md-4 ">Director</label>
              <div className="controls  ">
                <input
                  className="input-md  textinput textInput form-control"
                  id="director"
                  name="director"
                  placeholder="ie. Robert Zemeckis"
                  onKeyUp={(e) => setDirector(e.target.value)}
                  style={{ marginBottom: "10px" }}
                  type="text"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-md-4 ">Actors</label>
              <div className="controls  ">
                <input
                  className="input-md  textinput textInput form-control"
                  id="actors"
                  name="actors"
                  placeholder="ie. Tom Hanks,Tim Robbins,Morgan Freeman"
                  onKeyUp={(e) => setActors(e.target.value)}
                  style={{ marginBottom: "10px" }}
                  type="text"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-md-4 ">Overview</label>
              <div className="controls  ">
                <input
                  className="input-md  textinput textInput form-control"
                  id="overview"
                  name="overview"
                  placeholder="ie. A movie about a man who loses his job"
                  onKeyUp={(e) => setOverview(e.target.value)}
                  style={{ marginBottom: "10px" }}
                  type="text"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-md-4 ">Description</label>
              <div className="controls  ">
                <textarea
                  className="input-md  textinput textInput form-control"
                  id="description"
                  name="description"
                  placeholder="ie. A movie about a man who loses his job"
                  onKeyUp={(e) => setDescription(e.target.value)}
                  style={{ marginBottom: "10px" }}
                  type="text"
                ></textarea>
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-md-4 ">Cover Photo</label>
              <div className="controls  ">
                <input
                  type="file"
                  className="input-md  textinput textInput form-control"
                  id="photo"
                  name="photo"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="aab controls col-md-4 " />
              <div
                className="controls "
                style={{ paddingTop: "10px", display: "flex" }}
              >
                <div style={{ padding: "5px" }}>
                  <button
                    type="submit"
                    name="submit"
                    defaultValue="Submit"
                    className="btn btn-primary btn btn-info"
                    id="submit"
                  >
                    <i className="bi bi-file-earmark-plus-fill"></i> Add Movie
                  </button>
                </div>
                <div style={{ padding: "5px" }}>
                  <button
                    className="btn btn-secondary"
                    onClick={() => navigateTo(-1)}
                  >
                    <i className="bi bi-arrow-left-circle"></i> Back
                  </button>
                </div>
                <div style={{ padding: "5px" }}>
                  <button
                    className="btn btn-secondary"
                    onClick={() => navigateTo("/")}
                  >
                    <i className="bi bi-house-door-fill"></i> Home
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMovies;
