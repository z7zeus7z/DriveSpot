
import style from '../../Style/Home.module.css';
import Footer from '../Footer/Footer';
import AdCard from './AdCard';
import CarCard from '../CarCard/CarCard';
import PickDrop from './PickDrop';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import adCard1img from '../../assets/cardbg.png';
import adCard2img from '../../assets/adCar2.png';
import { Link } from 'react-router-dom';

const Home = ({ cars }) => {
  



 
  return (
    <>
      <div className={style.homeContainer}>
        <div className={style.adCarContainer}>
          <AdCard
            title='The Best Platform for Car Rental'
            info='Ease of doing a car rental safely and reliably. Of course at a low price.'
            img={adCard1img}
          />
          <AdCard
            title='Easy way to rent a car at a low price'
            info='Providing cheap car rental services and safe and comfortable facilities.'
            img={adCard2img}
          />
        </div>

        <div className={style.pickContainer}>
          <PickDrop />
          <button className={style.flip}>
            <FontAwesomeIcon color='white' icon={faRepeat} />
          </button>
          <PickDrop />
        </div>

        

        <div className={style.title}>
          <h5>Recommendation Cars</h5>
        </div>
        <div className={style.recomendationCars}>
          {cars.slice(0, 10).map(car => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>

        <div className={style.showMore}>
          <button className={style.showMoreBtn}>
            <Link to='/cars'>Show More Cars</Link>
          </button>
          <p>{cars.length} Car{cars.length !== 1 && 's'}</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
