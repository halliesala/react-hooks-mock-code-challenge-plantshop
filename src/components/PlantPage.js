import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
      fetch('http://localhost:6001/plants')
      .then(data => data.json())
      .then(data => {
        setPlants(data);
      })
    }
    ,
    []
  )

  function addPlant(plant) {
    setPlants([...plants, plant]);
  }

  const filteredPlants = plants.filter(plant => {
    return (
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
