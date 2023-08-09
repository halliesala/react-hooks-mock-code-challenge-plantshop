import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, updatePrice}) {
  return (
    <ul className="cards">
      {
        plants.map(plant => {
          return (
            <PlantCard key={plant.id} plant={plant} updatePrice={updatePrice} />
          )
        })
      }
    </ul>
  );
}

export default PlantList;
