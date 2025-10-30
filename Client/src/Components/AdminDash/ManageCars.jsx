import React, { useEffect, useState } from 'react';
import style from '../../Style/AdminDash.module.css';
const API_URL = import.meta.env.VITE_API_URL;
const ManageCars = ({ setCars }) => {
  const [cars, setLocalCars] = useState([]);

  // Fetch cars when component mounts
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch(`${API_URL}/api/cars`);
        const data = await res.json();
        setLocalCars(data);
      } catch (err) {
        console.error('Error fetching cars:', err);
      }
    };
    fetchCars();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this car?')) return;
    try {
      const res = await fetch(`${API_URL}/api/cars/${id}`, {
  method: 'DELETE',
});
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to delete car');
      
      const updatedCars = cars.filter((car) => car._id !== id);
      setLocalCars(updatedCars);
      setCars(updatedCars);
      alert('Car deleted successfully!');
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className={style.manageCarsContainer}>
      <h3>Manage Cars</h3>
      {cars.length === 0 ? (
        <p>No cars found.</p>
      ) : (
        <table className={style.carsTable}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Make</th>
              <th>Model</th>
              <th>Type</th>
              <th>Price/Day</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car._id}>
                <td>
                 <img
  src={`${API_URL}/uploads/cars/${car.images[0]}`}
  alt={car.model}
  width="80"
/>
                </td>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.type}</td>
                <td>${car.price}</td>
                <td>
                  <button
                    className={style.deleteBtn}
                    onClick={() => handleDelete(car._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageCars;