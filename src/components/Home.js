import React from "react";
import Card from "./Card";

import product1 from "./img/handbag-1.jpg";
import product2 from "./img/handbag-2.jpg";
import product3 from "./img/handbag-3.jpg";
const Home = () => {
  return (
    //    {/* Home screen */}

    <div className="mt-5 p-5 bg-light">
      <h3 className="mb-3">Trending Products</h3>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-9 col-lg-3 col-xl-3">
            <Card
              name="my bag"
              description="a good quality bag"
              src={product1}
              price="20 $"
            />
          </div>
          <div className="col-9 col-lg-3 col-xl-3">
            <Card
              name="tweety bag"
              description="high quality"
              src={product2}
              price="15 $"
            />
          </div>
          <div className="col-9 col-lg-3 col-xl-3">
            <Card
              name="marshmello bag"
              description="bad quality"
              src={product3}
              price="10 $"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
