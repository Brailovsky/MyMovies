import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./CSS/Style.css";
import { AuthContextState } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
function NavBar() {
  const { token, setToken, userdata, setUserdata } =
    useContext(AuthContextState);
  const navigateTo = useNavigate();
  return (
    <>
      <Navbar expand="lg" className="navbar mb-3">
        <Container fluid>
          <Navbar.Brand
            style={{ paddingLeft: "100px", color: "white" }}
            href="/"
          >
            <img height="50px" src="/site-logo.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ backgroundColor: "orange" }}>
              <Nav
                className="justify-content-end flex-grow-1 align-items-center"
                style={{ paddingRight: "100px", color: "white" }}
              >
                <Nav.Link style={{ color: "white" }} href="/">
                  <span>Home</span>
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="#/home">
                  Favorite
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="#/about">
                  About
                </Nav.Link>
                <NavDropdown
                  title={
                    !userdata ? (
                      <span style={{ color: "white" }}>Option</span>
                    ) : (
                      <span style={{ color: "white" }}>
                        {userdata?.username}
                      </span>
                    )
                  }
                  id={`offcanvasNavbarDropdown-expand-lg`}
                  className="text-white"
                >
                  {!token ? (
                    <>
                      <NavDropdown.Item href="/#/login">Login</NavDropdown.Item>
                      <NavDropdown.Item href="/#/signup">
                        Signup
                      </NavDropdown.Item>
                    </>
                  ) : (
                    <>
                      <NavDropdown.Item href="/#/profile">
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => {
                          localStorage.removeItem("token");
                          localStorage.removeItem("userdata");
                          setToken("");
                          setUserdata("");
                          navigateTo("/");
                        }}
                      >
                        Logout
                      </NavDropdown.Item>
                    </>
                  )}
                </NavDropdown>
                <Nav.Link href="#/profile">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {!token ? (
                      ""
                    ) : (
                      <img src={userdata?.profile} alt="" className="avater" />
                    )}
                  </div>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
