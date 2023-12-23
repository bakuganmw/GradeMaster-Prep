import React, { useState, useEffect } from 'react'
import NavbarElement from '../components/Navbar'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './list.css'
import { useNavigate } from 'react-router-dom';
const ChaptersPage = () => {
  const navigate = useNavigate();
    const [chapters, setChapters] = useState([]);
    const logged = JSON.parse(localStorage.getItem('user'));
    let token;
    if(logged){
      token = logged.token;
    }
    useEffect(() => {
      // Funkcja do pobierania danych
      const fetchData = async () => {
        try {
          const URL = window.location.href;
          const words = URL.split('/')
          let chapterName = words[words.length-1];
          const response = await axios.get(`http://localhost:4000/chapters/${chapterName}`,{
            headers: {
              'Authorization':  `Bearer ${token}`
            }
          }); 
          setChapters(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Wywołanie funkcji pobierającej dane
      fetchData();
    }, [token]);

  return (
    <div className='App'>
        <NavbarElement/>
        <h2>Pod rozdziały</h2>
        <div className='listLook'>
        {chapters.map(item => (
          <div key={item.chapterName} className='wrappedItemFromList'>
            <Button onClick={() => navigate(`wstep`)} className='itemFromList'>{item.order+ ')'} {item.chapterName} </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChaptersPage
export let chapterName