import React from "react";
import men from "./img/men.jpg";
import women1 from "./img/women1.png";
import bag from "./img/bag.png";
import Category from "./Category";

const Categories = () => {
  return (
    <div className=" my-5">
      <h2 className="text-center">Categories</h2>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-8 col-lg-3 col-xl-4">
            <Category name="Men" src={men} />
          </div>
          <div className="col-8 col-lg-3 col-xl-4">
            <Category name="women" src={women1} />
          </div>
          <div className="col-8 col-lg-3 col-xl-4">
            <Category name="Accesories" src={bag} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
