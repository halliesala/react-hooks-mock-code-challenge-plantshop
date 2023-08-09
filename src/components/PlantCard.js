import React, { useState } from "react";
import UpdatePriceForm from "./UpdatePriceForm";

function PlantCard({plant, updatePrice, deletePlant}) {

  const [inStock, setInStock] = useState(true);
  const [showUpdatePrice, setShowUpdatePrice] = useState(false);


  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      {
        showUpdatePrice
        ? <UpdatePriceForm plant={plant} updatePrice={updatePrice} setShowUpdatePrice={setShowUpdatePrice}/>
        : (
            <p>Price: {plant.price}
              <button onClick={() => setShowUpdatePrice(true)}>Update</button>
            </p>
          )
      }
      <button 
        className={inStock ? "in-stock" : "out-of-stock"}
        onClick={() => setInStock(!inStock)}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <button
        onClick={() => deletePlant(plant.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default PlantCard;
