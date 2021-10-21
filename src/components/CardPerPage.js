import { useState } from "react";
import "../assets/scss/CardPerPage.scss"


const CardPerPage = ({ heroes, heroesPerPage, setHeroesPerPage, setCurrentPage }) => {
  const [is12Active, SetIs12Active] = useState(true);
  const [is24Active, SetIs24Active] = useState(false);
  const [is48Active, SetIs48Active] = useState(false);
  const [is0Active, SetIs0Active] = useState(false);
  
  

  const handleLayOut = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    switch (e.target.value) {
      case "0":
        setHeroesPerPage(heroes.length);
        SetIs0Active(true);
        SetIs12Active(false);
        SetIs24Active(false);
        SetIs48Active(false);
        break;
      case "12":
        setHeroesPerPage(12);
        SetIs12Active(true);
        SetIs0Active(false);
        SetIs24Active(false);
        SetIs48Active(false);
        break;
      case "24":
        setHeroesPerPage(24);
        SetIs24Active(true);
        SetIs0Active(false);
        SetIs12Active(false);
        SetIs48Active(false);
        break;
      case "48":
        setHeroesPerPage(48);
        SetIs48Active(true);
        SetIs0Active(false);
        SetIs12Active(false);
        SetIs24Active(false);
        break;
      default:
        setHeroesPerPage(12);
    }
  };
  return (
    <div className="number-per-page">
      <div className="see">See</div>
      <button
        className={is12Active ? "per-page twelve active" : "per-page twelve"}
        onClick={handleLayOut}
        value={12}
      >
        12
      </button>
      <button
        className={
          is24Active ? "per-page twenty-four active" : "per-page twenty-four"
        }
        onClick={handleLayOut}
        value={24}
      >
        24
      </button>
      <button
        className={
          is48Active
            ? "per-page fourty-height active"
            : "per-page fourty-height"
        }
        onClick={handleLayOut}
        value={48}
      >
        48
      </button>
      <button
        className={
          is0Active
            ? "per-page all-characters active"
            : "per-page all-characters"
        }
        onClick={handleLayOut}
        value={0}
      >
        All
      </button>
      <div className="characters">characters.</div>
    </div>
  );
};

export default CardPerPage;