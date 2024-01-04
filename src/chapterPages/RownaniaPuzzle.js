import React, { useEffect, useState } from "react";
import "../../src/pages/MainPage.css";
import axios from "axios";
import NavbarElement from "../components/Navbar";
import "../pages/ClosedExecise.css";
import './RownaniaPuzzleElements.css';
const RownaniaPuzzle = () => {
  const [openExecise, setOpenExecise] = useState({ value: null });
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("4"); // Przykładowa poprawna odpowiedź
  const [canAccessPart2, setCanAccessPart2] = useState(false);
  const [canAccessPart3, setCanAccessPart3] = useState(false);
  const [canAccessPart4, setCanAccessPart4] = useState(false);
  const [canAccessPart5, setCanAccessPart5] = useState(false);
  const [canAccessPart6, setCanAccessPart6] = useState(false);
  const [canAccessPart7, setCanAccessPart7] = useState(false);
  const [canAccessPart8, setCanAccessPart8] = useState(false);
  const logged = JSON.parse(localStorage.getItem("user"));
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
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAnswerChange1 = (event) => {
    setAnswer(event.target.value);
  };

  const handleAnswerChange2 = (event) => {
    setAnswer(event.target.value);
  };

  const checkAnswer1 = () => {
    if (answer === openExecise[0]?.answers[0]) {
      setCanAccessPart2(true);
    } else {
      alert("Incorrect answer. Try again.");
    }
  };

  const checkAnswer2 = () => {
    if (answer === openExecise[0]?.answers[1]) {
      setCanAccessPart3(true);
      console.log('works')
    } else {
      alert("Incorrect answer. Try again.");
    }
  };

  
  
  return (
    <div className="App">
    <NavbarElement />
    <div className="page">
      <p className="task mt-5">{openExecise[0]?.content}</p>

      <div className="partContainer">
        <h2>Part 1</h2>
        <div className="inlineInput">
          <p>Liczba kupionych nagród -</p>
          <input type="text" value={answer} onChange={handleAnswerChange1} disabled={canAccessPart2} />
          {!canAccessPart2 && (
            <div>
              <button onClick={checkAnswer1}>Check Answer</button>
            </div>
          )}
        </div>
      </div>

      {canAccessPart2 && (
        <div className="partContainer">
          <h2>Part 2</h2>
          <div className="inlineInput">
            <p>Liczba kupionych książek -</p>
            <input type="text" value={answer} onChange={handleAnswerChange2} />
            <button onClick={checkAnswer2}>Check Answer</button>
          </div>
          
        </div>
      )}
    </div>
  </div>
);
};

export default RownaniaPuzzle;
