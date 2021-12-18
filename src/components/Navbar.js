import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-light bg-white shadow-sm p-3">
      <div className="container-xxl">
        <a href="#intro" className="navbar-brand">
          <span className="fw-bold text-secondary">Brand</span>
        </a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              Man
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#reviews">
              Women
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link" href="/" target="_blank">
              Accessories
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#info">
              Contact
            </a>
          </li>
          <li className="nav-item ms-2 d-none d-md-inline">
            <a className="nav-link" href="#contact">
              Account
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
