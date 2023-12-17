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

  useEffect(() => {
    // Funkcja do pobierania danych
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/sections'); // Zmienić URL na odpowiedni
        setSections(response.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Wywołanie funkcji pobierającej dane
    fetchData();
  }, []);
  return (
    <div className='App'>
      <NavbarElement/>
      <h2>Sections</h2>
      <div className='listLook'>
        {sections.map(item => (
          <div key={item.name} className='wrappedItemFromList' style={{ marginBottom: '15px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px'}}>
            <Button onClick={() => navigate(`${item.name}`)} className='itemFromList'>{item.order} {item.name}</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionsPage