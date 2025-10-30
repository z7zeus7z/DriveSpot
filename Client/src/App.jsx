import {Routes,Route,Navigate} from 'react-router-dom';
import Nav from "./Components/Nav/Nav"
import Home from "./Components/Home/Home"
import CarsPage from './Components/Cars/CarsPage';
import CarDetailsPage from './Components/CarDetails/CarDetailsPage';
import ScrollToTop from './Components/ScrollToTop';
import Auth from './Components/Login/Auth';
import AdminDash from './Components/AdminDash/AdminDash';
import { useEffect, useState } from 'react';
const API_URL = import.meta.env.VITE_API_URL;
function App() {
      const [user,setUser] = useState(null);
      const[cars,setCars] = useState([]);
      
      useEffect(()=>{
        const storedUser = localStorage.getItem('user');
        if(storedUser){
          setUser(JSON.parse(storedUser));
        }
      },[]) ;
      useEffect(()=>{
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
        }else{
          localStorage.removeItem('user');
        }
      })
      useEffect(()=>{
        const fetchCars = async ()=>{
          try{
            const res = await fetch(`${API_URL}/api/cars`);
            const data = await res.json();
            setCars(data);
          }
          catch(err){
            console.error(err);
          };
        }
        fetchCars();
      },[]);
  return (
    <>
      <ScrollToTop />
      <Nav user={user} setUser={setUser}/>
      <Routes>
        <Route path='/' element={<Home cars={cars}/>}/>
        <Route path='/cars' element={<CarsPage cars={cars}/>}/>
        <Route path='/cardetail/:id' element={<CarDetailsPage cars={cars}/>}/>
        <Route path='/auth' element={<Auth user={user} setUser={setUser} />}/>
        <Route path='/adminDash' element={user&&user.role==='admin'?<AdminDash setCars={setCars}/>:<Navigate to='/'/>}/>
      </Routes>
    </>
  )
}

export default App
