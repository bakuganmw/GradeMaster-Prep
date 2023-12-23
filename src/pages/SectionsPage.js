import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarElement from '../components/Navbar';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import './list.css'
const SectionsPage = () => {
  const navigate = useNavigate();
  const [sections, setSections] = useState([]);
  const logged = JSON.parse(localStorage.getItem('user'));
  let token;
  if(logged){
    token = logged.token;
  }
  useEffect(() => {
    // Funkcja do pobierania danych
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/sections',{
          headers: {
            'Authorization':  `Bearer ${token}`
          }
        }); 
        
        setSections(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [token]);
  return (
    <div className='App'>
      <NavbarElement/>
      <h2>Działy</h2>
      <div className='listLook'>
        {sections.map(item => (
          <div key={item.name} className='wrappedItemFromList'>
            <Button onClick={() => navigate(`${item.name}`)} className='itemFromList'>{item.order+')'}{item.name}</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionsPage