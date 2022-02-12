import React from "react";
import men from "./img/men.jpg";
import women1 from "./img/women1.png";
import bag from "./img/bag.png";

const Categories = () => {
  return (
    <div className=" my-5">
      <h2 className="text-center">Categories</h2>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-8 col-lg-3 col-xl-4">
            <img src={men} alt="hola" className="img-fluid m-2 style" />
            <p>Men</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
          <div className="col-8 col-lg-3 col-xl-4">
            <img src={women1} className="img-fluid m-2 style" alt="hola" />
            <p>Women</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
          <div className="col-8 col-lg-3 col-xl-4">
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
