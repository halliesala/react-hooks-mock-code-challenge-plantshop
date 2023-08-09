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

  function deletePlant(id) {
    const idx = plants.findIndex(plant => plant.id === id);
    setPlants([...plants.slice(0, idx), ...plants.slice(idx + 1)])
  }

  function updatePlant(updatedPlant) {
    const idx = plants.findIndex(plant => plant.id === updatedPlant.id);
    setPlants([...plants.slice(0, idx), updatedPlant, ...plants.slice(idx + 1)]);
  }


  function updatePrice(plant, price) {

    const PATCH_OPTIONS = {
      'method': 'PATCH',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      'body': JSON.stringify({
        price: price,
      })
    }
    fetch(`http://localhost:6001/plants/${plant.id}`, PATCH_OPTIONS)
      .then(data => data.json())
      .then(patchedPlant => {
        updatePlant(patchedPlant);
      })
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
      <PlantList plants={filteredPlants} updatePrice={updatePrice} deletePlant={deletePlant}/>
    </main>
  );
}

export default PlantPage;
