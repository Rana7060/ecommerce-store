import React from "react";
import men from "./men.jpg";
import women1 from "./women1.png";
import bag from "./bag.png";

const Categories = () => {
  return (
    <div className=" my-5">
      <h2 className="text-center">Categories</h2>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <img src={men} alt="hola" className="img-fluid m-2 style" />
            <p>Men</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
          <div className="col">
            <img src={women1} className="img-fluid m-2 style" alt="hola" />
            <p>Women</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
          <div className="col">
            <img src={bag} alt="hola" className="img-fluid m-2 style" />
            <p>Accesories</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
