import React, { useState, useEffect } from 'react'
import NavbarElement from '../components/Navbar'
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const ChaptersPage = () => {
    const [chapters, setChapters] = useState([]);
    
    useEffect(() => {
      // Funkcja do pobierania danych
      const fetchData = async () => {
        try {
          const URL = window.location.href;
          const words = URL.split('/')
          let chapterName = words[words.length-1];
          const response = await axios.get(`http://localhost:4000/chapters/${chapterName}`); // Zmienić URL na odpowiedni
          setChapters(response.data);
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
        <h2>Data Display</h2>
        {chapters.map(item => (
          <div key={item.chapterName} style={{ display: 'grid', gap: '10px',marginBottom: '15px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <Button >{item.chapterName}</Button>
          </div>
        ))}
    </div>
  )
}

export default ChaptersPage
export let chapterName