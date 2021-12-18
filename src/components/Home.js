import React from "react";

const Home = () => {
  return (
    <div className="container p-5 mt-5 bg-light">
      <h3>Trending Products</h3>
      <div className="container m-3 p-3">
        <div className="row ">
          <div className="col">
            <div className="card">
              <img
                src="../assets/product-1.png"
                className="card-img-top"
                alt="hey"
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={"product-1.png"}
                className="card-img-top"
                alt="het"
              ></img>
              <div className="card-body">
                <p className="card-text"> </p>
                <p className="text-muted text-start">Leather</p>
                <p className="text-start">Tweety bag</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
