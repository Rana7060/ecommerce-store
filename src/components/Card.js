import React from "react";

const Card = ({ name, description, src, price }) => {
  return (
    <div className="card m-3">
      <img src={src} className="card-img-top" alt="hey" />
      <div className="card-body">
        <p className="text-muted text-start">{name}</p>
        <p className="text-start">{description}</p>
        <p className="text-start text-primary">
          <b>{price}</b>
        </p>
      </div>
    </div>
  );
};

export default Card;
