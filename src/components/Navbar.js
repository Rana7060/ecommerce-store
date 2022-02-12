import React from "react";
import product1 from "./img/handbag-1.jpg";
import product2 from "./img/handbag-2.jpg";
import product3 from "./img/handbag-3.jpg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top navbar-light bg-white shadow-sm p-3">
        <div className="container-xxl">
          {/* navbar items */}

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <a href="#intro" class="navbar-brand">
              <span class="fw-bold text-secondary">Portfol</span>
            </a> */}

          <div
            class="collapse navbar-collapse justify-content-around align-center"
            id="main-nav"
          >
            <a href="#intro" className="navbar-brand">
              <span className="fw-bold text-secondary">Brand</span>
            </a>

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
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Women
                </a>
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
                  href="#"
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
                    <a className="dropdown-item" href="#">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Create Account
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* navbar */}
      </nav>

      {/* Home screen */}
      <div className="mt-5 p-5 bg-light">
        <h3 className="mb-5">Trending Products</h3>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="card m-3">
                <img src={product1} className="card-img-top" alt="hey" />
                <div className="card-body">
                  <p className="text-muted text-start">Leather</p>
                  <p className="text-start">Tweety bag</p>
                  <p className="text-start text-primary">
                    <b>10$</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card m-3">
                <img src={product2} className="card-img-top" alt="het"></img>
                <div className="card-body">
                  <p className="text-muted text-start">Leather</p>
                  <p className="text-start">Tweety bag</p>
                  <p className="text-start text-primary">
                    <b>10$</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card m-3">
                <img src={product3} className="card-img-top" alt="hello" />
                <div className="card-body">
                  <p className="text-muted text-start">Leather</p>
                  <p className="text-start">Tweety bag</p>
                  <p className="text-start text-primary">
                    <b>10$</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main div */}
    </div>
  );
};

export default Navbar;
