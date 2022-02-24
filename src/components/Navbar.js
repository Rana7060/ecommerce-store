import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top navbar-light bg-white shadow-sm p-3">
        <div className="container-xxl">
          {/* navbar items */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <a href="#intro" class="navbar-brand">
              <span class="fw-bold text-secondary">Portfol</span>
            </a> */}

          <div
            className="collapse navbar-collapse justify-content-around align-center"
            id="main-nav"
          >
            <Link to="/homepage" href="#intro" className="navbar-brand">
              <span className="fw-bold text-secondary">®Eve's Shop</span>
            </Link>

            {/* search bar */}
            <div className="d-none d-sm-none d-md-flex d-lg-flex">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />

                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/homepage" className="nav-link" href="#home">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="categories" className="nav-link" href="#products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#cart">
                  <i className="bi bi-bag-fill"></i>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-fill"></i>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link to="/signin" className="dropdown-item" href="/">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="dropdown-item" href="/">
                      Create Account
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* navbar */}
      </nav>

      {/* main div */}
    </div>
  );
};

export default Navbar;
