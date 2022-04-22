import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

/**
 * Navbar component:
 * Uses auth0 to manage authentication state conditionally displaying different nav items based on authentication status
 * isAuthenticated: displays Profile and Logout button; Hides Login button
 * !isAuthentication: hides Profile and Logout button: displays Login button
 * @returns
 */
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  //window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src="/images/AR_Logo_Clear.png"
              alt="logo"
              style={{ width: "65px", height: "65px" }}
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ourprocess"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Process
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
