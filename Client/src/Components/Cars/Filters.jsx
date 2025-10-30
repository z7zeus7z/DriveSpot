import React, { useState } from 'react';
import style from '../../Style/CarsPage.module.css';

const Filters = ({ onFilterChange }) => {
  const [price, setPrice] = useState(200);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedCapacities, setSelectedCapacities] = useState([]);

  const handleTypeChange = (e) => {
    const { value, checked } = e.target;
    const updated = checked
      ? [...selectedTypes, value]
      : selectedTypes.filter((t) => t !== value);
    setSelectedTypes(updated);
    onFilterChange({ price, types: updated, capacities: selectedCapacities });
  };

  const handleCapacityChange = (e) => {
    const { value, checked } = e.target;
    const updated = checked
      ? [...selectedCapacities, value]
      : selectedCapacities.filter((c) => c !== value);
    setSelectedCapacities(updated);
    onFilterChange({ price, types: selectedTypes, capacities: updated });
  };

  const handlePriceChange = (e) => {
    const newPrice = Number(e.target.value);
    setPrice(newPrice);
    onFilterChange({ price: newPrice, types: selectedTypes, capacities: selectedCapacities });
  };

  return (
    <div className={style.filterContainer}>
      <div className={style.filters}>
        <div className={style.fliterType}>
          <p>Type</p>
          {["Luxury", "SUV", "Sedan", "Coupe", "Hatchback"].map((type) => (
            <div key={type} className={style.filter}>
              <input
                type="checkbox"
                value={type}
                onChange={handleTypeChange}
              />
              <label>{type}</label>
            </div>
          ))}
        </div>

        <hr />

        <div className={style.fliterType}>
          <p>Capacity</p>
          {["2", "4", "6"].map((cap) => (
            <div key={cap} className={style.filter}>
              <input
                type="checkbox"
                value={cap}
                onChange={handleCapacityChange}
              />
              <label>{cap} Person</label>
            </div>
          ))}
        </div>

        <hr />

        <div className={style.fliterType}>
          <p>Price</p>
          <input
            type="range"
            min="0"
            max="200"
            value={price}
            onChange={handlePriceChange}
          />
          <p>Price: {price}$</p>
        </div>
      </div>
    </div>
  );
};

export default Filters;