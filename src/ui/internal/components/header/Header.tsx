import { NavLink } from "react-router-dom";
import Button from "../../../external/components/button/Button";
import Group from "../../../../../public/Group.png";
import Intense from "../../../../../public/Intense.png";
import Frame from "../../../../../public/Frame.png";
import Login from "../../../../../public/log-in-04.png";

const Header = () => {
  const NavBar = [
    { title: "Home", path: "/" },
    { title: "Features", path: "/features" },
    { title: "Support", path: "/support" },
    { title: "Download", path: "/download" },
    { title: "Solution", path: "/solution" },
  ];

  return (
    <div className="container-fluid p-3">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* Logo Section */}
          <div className="d-flex align-items-center">
            <img src={Group} alt="Logo" className="me-2" />
            <img src={Intense} alt="Logo Text" />
          </div>

          {/* Toggle button for smaller screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Centered Navigation Links */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-3">
              {NavBar.map((item) => (
                <li className="nav-item" key={item.title}>
                  <NavLink className="nav-link text-dark" to={item.path}>
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Language and Login Section */}
            <div className="d-flex align-items-center gap-4 mt-3 mt-lg-0">
              <div className="d-flex align-items-center gap-2">
                <img src={Frame} alt="Language" />
                <h6 className="mb-0">English</h6>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img src={Login} alt="Login Icon" />
                <h6 className="mb-0">Login</h6>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
