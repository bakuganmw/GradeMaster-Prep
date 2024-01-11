import React from "react";
import NavbarElement from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const RownaniaWstep = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <NavbarElement />
      <div className="page">
        <h1 className="task mt-5">Wstęp</h1>

        <div className="partContainer">
          <p className="task">
            W tym dziale przedstawimy jak postępować z zadaniami związanymi z
            równaniami z treścią.
          </p>
          <h2 className="mb-3">Treść</h2>
          <p className="task">
            Adam zamówił bukiet złożony tylko z goździków i róż, w którym
            goździków było 2 razy więcej niż róż. Jedna róża kosztowała 4 zł, a
            cena jednego goździka wynosiła 3 zł. Czy wszystkie kwiaty w tym
            bukiecie mogły kosztować 35 zł? Uzasadnij odpowiedź.
          </p>
          <h2 className="mb-3">Część 1</h2>
          <p className="task">
            Zapisz <strong>dane</strong> które mamy podane w treści zadania.
          </p>
          <p className="task">Liczba róż - x</p>
          <p className="task">Liczba gożdzi - 2x</p>
          <p className="task">Cena róż - x * 4 = 4x</p>
          <p className="task">Cena góżdzi - 2x * 3 = 6x</p>
          <p className="task">Cena bukietu która ma wynosić - 35</p>
          <h2 className="mb-3">Część 2</h2>
          <p className="task">Stwórz równanie i rozwiąż:</p>
          <p className="task">4x + 6x = 35</p>
          <p className="task">10x = 35 | :10</p>
          <p className="task">x = 3,5</p>
          <h2 className="mb-3">Część 3</h2>
          <p className="task">Przeanalizuj wynik i daj odpowiedź:</p>
          <p className="task">
            wynik wyszedł liczbą niecałkowitą. Liczba róż musi być liczbą
            całkowitą ,gdyż nie ma połowy róży. A zatem nie da się kupić bukietu
            za 35 zł.
          </p>
          <button className="btn btn-primary buttonAnswer mt-3 mb-5" onClick={() => navigate('puzzle')}>Przejdz do zadania</button>
        </div>
      </div>
    </div>
  );
};

export default RownaniaWstep;
