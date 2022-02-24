import React from "react";
// import Categories from "./components/Categories";
import Products from "./Products";
import Reviews from "./Reviews";
import Home from "./Home";
import Categories from "./Categories";

const Homepage = () => {
  return (
    <div>
      <Home />
      <Products />
      <Categories />
      <Reviews />
    </div>
  );
};

export default Homepage;
