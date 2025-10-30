import React, { useState } from 'react';
import style from '../../Style/AdminDash.module.css';

const ListCar = ({ setCars }) => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    type: 'Sedan',
    seats: 0,
    price: 0,
    images: [],
  });

  const [previewImages, setPreviewImages] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      const selectedFiles = Array.from(files);
      setFormData((prev) => ({ ...prev, images: selectedFiles }));

      const imagePreviews = selectedFiles.map((file) =>
        URL.createObjectURL(file)
      );
      setPreviewImages(imagePreviews);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append('make', formData.make);
      form.append('model', formData.model);
      form.append('year', formData.year);
      form.append('type', formData.type);
      form.append('seats', formData.seats);
      form.append('price', formData.price);
      formData.images.forEach((img) => {
        form.append('images', img);
      });

      const res = await fetch('http://localhost:5000/api/cars', {
        method: 'POST',
        body: form,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to add car');

      setCars((prevCars) => [...prevCars, data.car]);
      alert('Car listed successfully!');

      setFormData({
        make: '',
        model: '',
        year: '',
        type: 'Sedan',
        seats: 0,
        price: 0,
        images: [],
      });
      setPreviewImages([]);
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  };

  return (
    <div className={style.listCarContainer}>
      <form onSubmit={handleSubmit}>
        <h4>List Car</h4>
        <div className={style.listInputs}>
          <div className={style.listInput}>
            <label htmlFor="make">Car Make</label>
            <input
              id='make'
              name="make"
              type="text"
              value={formData.make}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.listInput}>
            <label htmlFor="model">Car Model</label>
            <input
              id='model'
              name="model"
              type="text"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.listInput}>
            <label htmlFor="year">Year</label>
            <input
              id='year'
              name="year"
              type="number"
              min="2000"
              max={new Date().getFullYear()}
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.listInput}>
            <label htmlFor="type">Car Type</label>
            <select id='type' name="type" value={formData.type} onChange={handleChange}>
              <option  value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Luxury">Luxury</option>
              <option value="Coupe">Coupe</option>
            </select>
          </div>
          <div className={style.listInput}>
            <label htmlFor="seats">Seats</label>
            <input
              id='seats'
              name="seats"
              type="number"
              min="0"
              max="6"
              value={formData.seats}
              onChange={handleChange}
            />
          </div>
          <div className={style.listInput}>
            <label htmlFor="price">Price/day</label>
            <input
              id='price'
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.listInput}>
            <label htmlFor='images'>Upload Images</label>
            <input
              id='images'
              name="images"
              type="file"
              multiple
              accept="image/*"
              onChange={handleChange}
            />
          </div>
        </div>

        {previewImages.length > 0 && (
          <div className={style.previewContainer}>
            {previewImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`preview-${index}`}
                className={style.previewImage}
              />
            ))}
          </div>
        )}

        <button type="submit" className={style.listBtn}>
          List
        </button>
      </form>
    </div>
  );
};

export default ListCar;