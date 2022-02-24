import React from "react";

const Category = ({ src, name }) => {
  return (
    <div>
      <img src={src} alt="hola" className="img-fluid m-2 style" />
      <p>{name}</p>
      <button className="btn btn-primary">Shop Now</button>
    </div>
  );
};

export default Category;
