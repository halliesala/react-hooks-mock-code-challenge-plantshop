import React, { useState } from "react";

const BLANK_FORM = {
  name: '',
  image: '',
  price: '',
}

function NewPlantForm({addPlant}) {
  const [formData, setFormData] = useState(BLANK_FORM)

  function handleChange(e) {
    const key = e.target.name;
    const val = e.target.value;
    setFormData({...formData, [key]: val});
    // console.log(`${key}: ${val}`);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const POST_OPTIONS = {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      'body': JSON.stringify(formData)
    };
    fetch('http://localhost:6001/plants', POST_OPTIONS)
    .then(data => data.json())
    .then(newPlant => {
      addPlant(newPlant);
      setFormData(BLANK_FORM);
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formData.image}
          onChange={handleChange}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
