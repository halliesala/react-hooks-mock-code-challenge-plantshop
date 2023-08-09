import React, { useState } from "react";

function PlantCard({plant}) {

  const [inStock, setInStock] = useState(true);
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button 
        className={inStock ? "in-stock" : "out-of-stock"}
        onClick={() => setInStock(!inStock)}>{inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
