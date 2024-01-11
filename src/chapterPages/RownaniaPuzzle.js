import React, { useEffect, useState } from "react";
import "../../src/pages/MainPage.css";
import axios from "axios";
import NavbarElement from "../components/Navbar";
import "../pages/ClosedExecise.css";
import './RownaniaPuzzleElements.css';
import { useNavigate } from "react-router-dom";
const RownaniaPuzzle = () => {
  const [counter, setCounter] = useState(0);
  const [openExecise, setOpenExecise] = useState({ value: null });
  const [advicePart, setAdvicePart] = useState(0);
  const [answer, setAnswer] = useState("");
  const [canAccessPart2, setCanAccessPart2] = useState(false);
  const [canAccessPart3, setCanAccessPart3] = useState(false);
  const [canAccessPart4, setCanAccessPart4] = useState(false);
  const [canAccessPart5, setCanAccessPart5] = useState(false);
  const [canAccessPart6, setCanAccessPart6] = useState(false);
  const [canAccessPart7, setCanAccessPart7] = useState(false);
  const [canAccessPart8, setCanAccessPart8] = useState(false);
  const [canAccessEnd, setCanAccessEnd] = useState(false);
  const [countCorrect, setCountCorrect] = useState(0);
  const logged = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  let token;
  if (logged) {
    token = logged.token;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/openExecises/Równania",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOpenExecise(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [token]);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };


  const checkAnswer = () => {
    if (answer.toLowerCase() === openExecise[0]?.answers[countCorrect]) {
      setCounter(0);
      if(countCorrect===0){
        setCanAccessPart2(true);
        setCountCorrect(1);
      }
      else if(countCorrect===1){
        setCanAccessPart3(true);
        setCountCorrect(2);
      }
      else if(countCorrect===2){
        setCanAccessPart4(true);
        setCountCorrect(3);
      }
      else if(countCorrect===3){
        setCanAccessPart5(true);
        setCountCorrect(4);
        setAdvicePart(1)
      }
      else if(countCorrect===4){
        setCanAccessPart6(true);
        setCountCorrect(5);
      }
      else if(countCorrect===5){
        setCanAccessPart7(true);
        setCountCorrect(6);
        setAdvicePart(2)
      }
      else if(countCorrect===6){
        setCanAccessPart8(true);
        setCountCorrect(7);
        setAdvicePart(3);
      }
      else if(countCorrect===7){
        setCanAccessEnd(true);
        setCountCorrect(8);
      }
      
    } else {
      setCounter(counter+1);
    }
  };

  
  return (
    <div className="App">
    <NavbarElement />
    <div className="page">
      <p className="task mt-5">{openExecise[0]?.content}</p>

      <div className="partContainer">
        <h2 className="mb-3">Part 1</h2>
        <div className="inlineInput">
          <p className="pt-3">Liczba kupionych nagród -</p>
          <input type="text" className="form-control formLen1" maxLength={1} onChange={handleAnswerChange} disabled={canAccessPart2} />
        </div>
      </div>

      {canAccessPart2 && (
        <div className="partContainer">
          <div className="inlineInput">
            <p className="pt-3">Liczba kupionych książek -</p>
            <input type="text" className="form-control formLen2" maxLength={6} onChange={handleAnswerChange} disabled={canAccessPart3}/>
          </div>
        </div>
      )}

      {canAccessPart3 && (
        <div className="partContainer">
          <div className="inlineInput">
            <p className="pt-3">Liczba kupionych e-booków - </p>
            <input type="text" className="form-control formLen3" maxLength={9} onChange={handleAnswerChange} disabled={canAccessPart4}/>
          </div>
        </div>
      )}

      {canAccessPart4 && (
        <div className="partContainer">
          <h2>Part 2</h2>
          <div className="inlineInput">
            <p className="pt-3">(2/3)x + (2/3)x- 8 =</p>
            <input type="text" className="form-control formLen1" maxLength={1} onChange={handleAnswerChange} disabled={canAccessPart5}/>
          </div>
        </div>
      )}

      {canAccessPart5 && (
        <div className="partContainer">
          <div className="inlineInput">
            <p className="pt-3">(2/3)x + (2/3)x</p>
            <input type="text" className="form-control formLen1" maxLength={2} onChange={handleAnswerChange} disabled={canAccessPart6}/>
            <p className="pt-3">=</p>
            {canAccessPart6 && (
            <input type="text" className="form-control formLen1" maxLength={1} onChange={handleAnswerChange} disabled={canAccessPart7}/>
            )}
          </div>
        </div>
      )}

      {canAccessPart7 && (
        <div className="partContainer">
            
            <div className="inlineInput">
            <input type="text" className="form-control formLen2" maxLength={3} onChange={handleAnswerChange} disabled={canAccessPart8}/>
            <p className="pt-3">x= 8 </p>
          </div>
        </div>
      )}

      {canAccessPart8 && (
        <div className="partContainer">
          <div className="inlineInput">
            <p className="pt-3">x= </p>
            <input type="text" className="form-control formLen2" maxLength={2} onChange={handleAnswerChange} disabled={canAccessEnd}/>
          </div>
        </div>
      )}

      {canAccessEnd && (
        <div>
          <p className="mt-3">Gratulacje udało się ci się skończyć zadanie</p>
          <button className="btn btn-primary buttonAnswer mt-3 mb-5" onClick={() => navigate('/sections')}>powrót</button>
        </div>
        
      )}

      {counter > 5 && (
        <p className="task mt-4" style={{color:'#FFC436'}}><strong>{openExecise[0]?.advice[advicePart]}</strong></p>
      )}

      {!canAccessPart2 && (
        <button className="btn btn-primary buttonAnswer mt-3" onClick={checkAnswer}>Sprawdź odpowiedź</button>
      )}

      {canAccessPart2 && !canAccessPart3 && (
        <button className="btn btn-primary buttonAnswer mt-3" onClick={checkAnswer}>Sprawdź odpowiedź</button>
      )}

      {canAccessPart3 && !canAccessPart4 && (
        <button className="btn btn-primary buttonAnswer mt-3" onClick={checkAnswer}>Sprawdź odpowiedź</button>
      )}

      {canAccessPart4 && !canAccessPart5 && (
        <button className="btn btn-primary buttonAnswer mt-3" onClick={checkAnswer}>Sprawdź odpowiedź</button>
      )}

      {canAccessPart5 && !canAccessPart6 && (
        <button className="btn btn-primary buttonAnswer mt-3" onClick={checkAnswer}>Sprawdź odpowiedź</button>
      )}

      {canAccessPart6 && !canAccessPart7 && (
        <button className="btn btn-primary buttonAnswer mt-3" onClick={checkAnswer}>Sprawdź odpowiedź</button>
      )}

      {canAccessPart7 && !canAccessPart8 && (
        <button className="btn btn-primary buttonAnswer mt-3" onClick={checkAnswer}>Sprawdź odpowiedź</button>
      )}

      {canAccessPart8 && !canAccessEnd && (
        <button className="btn btn-primary buttonAnswer my-3" onClick={checkAnswer}>Sprawdź odpowiedź</button>
      )}
    </div>
  </div>
);
};

export default RownaniaPuzzle;
