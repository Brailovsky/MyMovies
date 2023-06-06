import { siteTitile } from "../../config";
import { useNavigate } from "react-router";
import "./CSS/Style.css";
function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <section className="footer-style">
        {/* Footer */}
        <footer
          className="footer text-center text-white"
          style={{ backgroundColor: "#FFA500" }}
        >
          {/* Grid container */}
          {!localStorage.getItem("token") && (
            <div className="container p-4 pb-0">
              {/* Section: CTA */}
              <section className="">
                <p className="d-flex justify-content-center align-items-center">
                  <span className="me-3">Register as admin</span>
                  <button
                    type="button"
                    className="btn btn-outline-light btn-rounded"
                    onClick={() => {
                      navigate("/admin-signup");
                    }}
                  >
                    Sign up!
                  </button>
                </p>
              </section>
              {/* Section: CTA */}
            </div>
          )}
          {/* Grid container */}
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
          >
            © {new Date().getFullYear()} Copyright:
            <a className="text-white" href="/">
              {siteTitile}
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </section>
    </>
  );
}

export default Footer;
