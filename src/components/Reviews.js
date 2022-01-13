import React from "react";
import img from "./img/background.jpg";

const Reviews = () => {
  return (
    <div className="my-5">
      <h2 className="m-4 p-4">Reviews</h2>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card shadow">
              <div className="card-body">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <p className="card-text">
                  To a smile on my poker face husband is something that doesn't
                  happen so often, therefore I'm glad I got him the tobacco
                  pouch 😍😍😍
                </p>
                <h6 className="card-subtitle mb-2 ">Rana Ameer</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark text-white">
              <img src={img} className="card-img blur" alt="hey" />
              <div className="card-img-overlay">
                <h2 className="card-title">Find things you'll love.</h2>
                <button className="card-text btn btn-secondary">
                  SHOP NOW ▶
                </button>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow">
              <div className="card-body">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>

                <p className="card-text">
                  Hello, thank u so much just received the wallet, amazing
                  really, high quality leather, and all over all super wow, I'm
                  all so happy I ordered from you.
                </p>
                <h6 className="card-subtitle mb-2 ">Rana Ameer</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
