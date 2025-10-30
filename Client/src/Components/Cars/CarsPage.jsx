import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import style from '../../Style/CarsPage.module.css';
import PickDrop from '../Home/PickDrop';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import CarCard from '../CarCard/CarCard';
import Footer from '../Footer/Footer';

const CarsPage = ({ cars }) => {
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleFilterChange = (filters) => {
    const { price, types, capacities } = filters;

    // If no filters are selected, show all cars
    const noFiltersSelected =
      (types.length === 0) && (capacities.length === 0) && (price === 200);

    if (noFiltersSelected) {
      setFilteredCars(cars);
      return;
    }

    const result = cars.filter((car) => {
      const matchesType = types.length === 0 || types.includes(car.type);
      const matchesCapacity =
        capacities.length === 0 || capacities.includes(String(car.seats));
      const matchesPrice = car.price <= price;
      return matchesType && matchesCapacity && matchesPrice;
    });

    setFilteredCars(result);
  };

  // Update if cars prop changes
  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);

  return (
    <>
      <div className={style.CarsPageContainer}>
        <Filters onFilterChange={handleFilterChange} />
        <div className={style.secContainer}>
          <div className={style.pickContainer}>
            <PickDrop />
            <button className={style.flip}>
              <FontAwesomeIcon color='white' icon={faRepeat} />
            </button>
            <PickDrop />
          </div>
          <div className={style.carContainer}>
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                <CarCard key={car._id} car={car} />
              ))
            ) : (
              <p>No cars match your filters.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CarsPage;