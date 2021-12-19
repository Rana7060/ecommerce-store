import React from "react";
import img from "./product-1.jpg";

const Home = () => {
  return (
    <div className="mt-5 p-5 bg-light">
      <h3>Trending Products</h3>
      <div className="container m-3 p-3">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <img src={img} className="card-img-top" alt="hey" />
              <div className="card-body">
                <p className="text-muted text-start">Leather</p>
                <p className="text-start">Tweety bag</p>
                <p className="text-start text-primary">
                  <b>10$</b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src={img} className="card-img-top" alt="het"></img>
              <div className="card-body">
                <p className="text-muted text-start">Leather</p>
                <p className="text-start">Tweety bag</p>
                <p className="text-start text-primary">
                  <b>10$</b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src={img} className="card-img-top" alt="hello" />
              <div className="card-body">
                <p className="text-muted text-start">Leather</p>
                <p className="text-start">Tweety bag</p>
                <p className="text-start text-primary">
                  <b>10$</b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src={img} className="card-img-top fluid" alt="Hello" />
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
