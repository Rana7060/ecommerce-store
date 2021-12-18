import React from "react";

const Categories = () => {
  return (
    <div className=" my-5">
      <h2 className="text-center">Categories</h2>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <img
              src="components/assets/products-1.jpg"
              alt="hola"
              className="fluid"
            ></img>
            <p>Men</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
          <div className="col">
            <p>Women</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
          <div className="col">
            <p>Accesories</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
