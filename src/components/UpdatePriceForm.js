import { useState } from 'react';

export default function UpdatePriceForm({ plant, updatePrice, setShowUpdatePrice }) {
    const [formData, setFormData] = useState({
        price: plant.price,
    })

    function handleChange(e) {
        const key = e.target.name;
        const val = e.target.value;
        setFormData({...formData, [key]: val});
        // console.log(`${key}: ${val}`);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const price = formData.price;
        console.log(price);
        updatePrice(plant, price);
        setShowUpdatePrice(false);
    }

    return (
        <div className="update-price-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="price"
                    step="0.01"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}