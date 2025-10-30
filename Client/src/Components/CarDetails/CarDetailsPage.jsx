import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from '../../Style/CarDetails.module.css';
import CarCard from '../CarCard/CarCard';
import Footer from '../Footer/Footer';
import Filters from '../Cars/Filters';

const CarDetailsPage = ({ cars }) => {
  const { id } = useParams();
  const car = cars.find(c => c._id === id);

  const [selectedImage, setSelectedImage] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  // ✅ Set the first image once car data is available
  useEffect(() => {
    if (car && car.images && car.images.length > 0) {
      setSelectedImage(`http://localhost:5000/uploads/cars/${car.images[0]}`);
    }
  }, [car]);

  const handleImageClick = (img) => {
    setSelectedImage(`http://localhost:5000/uploads/cars/${img}`);
  };

  const openFullscreen = () => setIsFullscreen(true);
  const closeFullscreen = () => setIsFullscreen(false);

  if (!car) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Car not found</h2>;
  }

  return (
    <>
      <div className={style.CarDetailsPageContainer}>
        <Filters />
        <div className={style.ContentContainer}>
          <div className={style.car}>
            <div className={style.imgesContainer}>
              <div className={style.showImg}>
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt={car.model}
                    onClick={openFullscreen}
                    style={{ cursor: 'zoom-in' }}
                  />
                )}
              </div>
              <div className={style.imgs}>
                {car.images.map((img, index) => (
                  <div
                    key={index}
                    className={style.img}
                    onClick={() => handleImageClick(img)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src={`http://localhost:5000/uploads/cars/${img}`}
                      alt={car.model}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className={style.carInfo}>
              <div className={style.carName}><h4>{car.make} {car.model}</h4></div>
              <div className={style.carDescription}><p>Type: {car.type}</p></div>
              <div className={style.carOptions}>
                <div className={style.option}><h5>Year</h5><p>{car.year}</p></div>
                <div className={style.option}><h5>Seats</h5><p>{car.seats}</p></div>
                <div className={style.option}><h5>Transmission</h5><p>{car.transmition || 'Automatic'}</p></div>
              </div>
              <div className={style.price_Btn}>
                <h5>${car.price}/day</h5>
                <button className={style.RentBtn}>Rent Now</button>
              </div>
            </div>
          </div>

          <div className={style.title}><h5>Recommendation Cars</h5></div>
          <div className={style.recomendationCars}>
            {cars.filter(c => c._id !== id).slice(0, 4).map(c => (
              <CarCard key={c._id} car={c} />
            ))}
          </div>
        </div>
      </div>

     
      {isFullscreen && (
        <div className={style.fullscreenOverlay} onClick={closeFullscreen}>
          <img src={selectedImage} alt="fullscreen" className={style.fullscreenImg} />
        </div>
      )}

      <Footer />
    </>
  );
};

export default CarDetailsPage;
