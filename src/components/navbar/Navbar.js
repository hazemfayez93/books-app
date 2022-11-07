import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <Link to="/" className="navbar-brand flex">
            <img
              style={{ height: "90px", width: "90px" }}
              src={logoImg}
              alt="site logo"
            />
            <span className="text-uppercase fw-7 ls-1">The House of Books</span>
          </Link>
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>

        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-uppercase text-light-black fs-22 fw-6 ls-1"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="browse"
                className="nav-link text-uppercase text-light-black fs-22 fw-6 ls-1"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
