import axios from "axios";
import React, { useEffect, useState } from "react";
import NavbarElement from "../components/Navbar";
import "./ClosedExecise.css";

const ClosedExecisePage = () => {
  const [execise, setExecises] = useState({ answers: 3 });
  const [correctAnswerSelected, setCorrectAnswerSelected] = useState(false);
  const [wrongAnswerSelected, setWrongAnswerSelected] = useState(false);
  const logged = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/closedExecises");
        setExecises(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedAnswer = e.target.value;
    const correctAnswer = execise.correctAnswer;

    if (selectedAnswer === correctAnswer) {
      setCorrectAnswerSelected(true);
    }
    else{
      setWrongAnswerSelected(true);
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="App">
      <NavbarElement />
      <div className="page">
        <h1 className="my-4">Zadanie zamknięte z poprzednich egzaminów</h1>
        <p className="task">{execise.content}</p>
        {execise.answers.length > 0 && (
          <div className="button-container">
            {execise.answers.map((answer, index) => (
              <button
                key={index}
                className="btn btn-primary mr-2 mb-3 buttonAnswer" // Apply Bootstrap classes
                onClick={handleSubmit}
                value={answer}
                disabled={correctAnswerSelected || wrongAnswerSelected}
              >
                {answer}
              </button>
            ))}
          </div>
        )}
        {correctAnswerSelected &&(<p className="task mt-4 alert alert-success">Zgadza się!!!!!!</p>)}
        {wrongAnswerSelected &&(<p className="task mt-4 alert alert-danger">Zła odpowiedź!!!!!!</p>)}
        {logged && (correctAnswerSelected || wrongAnswerSelected) &&(<p className="task mt-4">{execise.reason}</p>)}
        {(correctAnswerSelected || wrongAnswerSelected)&&(<button className=" btn task my-4 btn-primary buttonAnswer" onClick={refreshPage}>Następne zadanie</button>)}
      </div>
    </div>
  );
};

export default ClosedExecisePage;
