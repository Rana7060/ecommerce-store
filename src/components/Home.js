import React from "react";
import img from "./img/product-1.jpg";
import product1 from "./img/handbag-1.jpg";
import product2 from "./img/handbag-2.jpg";
import product3 from "./img/handbag-3.jpg";

const Home = () => {
  return (
    <div className="mt-5 p-5 bg-light">
      <h3 className="mb-5">Trending Products</h3>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card">
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
            <div className="card">
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
            <div className="card">
              <img
                src={product3}
                className="card-img-top img-fluid"
                alt="hello"
              />
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
  );
};

export default Home;
