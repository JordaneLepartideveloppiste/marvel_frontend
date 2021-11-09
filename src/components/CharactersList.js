import { useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchBar from "./SearchBar";
import ModalHero from "./ModalHero";
import "../assets/scss/CharactersList.scss";
import Pagination from "./Pagination";
import CardPerPage from "./CardPerPage";

const CharactersList = ({ data }) => {
  const [showModalHero, setShowModalHero] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [heroesPerPage, setHeroesPerPage] = useState(12);
  const [heroId, setHeroId] = useState("");

  const heroes = data.results;
  const indexOfLastHero = currentPage * heroesPerPage;
  const indexOfFirstHero = indexOfLastHero - heroesPerPage;
  const currentHeroes = data.results.slice(indexOfFirstHero, indexOfLastHero);

  const heroesNamesList = [];
  for (let i=0; i< heroes.length; i++) {
    heroesNamesList.push({id: heroes[i]._id, name: heroes[i].name});
  }
  

  return (
    <>
      <div className="characters_list">
        <div className="characters_list_content">
          <SearchBar
            heroesNamesList={heroesNamesList}
            heroes={heroes}
            setShowModalHero={setShowModalHero}
            setHeroId={setHeroId}
          />
          <div className="characters_list_title">
            <h2>Find Your favorites heros</h2>

            <CardPerPage
              heroes={heroes}
              heroesPerPage={heroesPerPage}
              setHeroesPerPage={setHeroesPerPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div className="characters_list_cards">
            {currentHeroes.map((hero, index) => {
              return (
                <CharacterCard
                  hero={hero}
                  key={index}
                  setShowModalHero={setShowModalHero}
                  setHeroId={setHeroId}
                />
              );
            })}
          </div>
          <Pagination
            heroes={heroes}
            heroesPerPage={heroesPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      {showModalHero && (
        <ModalHero
          heroId={heroId}
          setShowModalHero={setShowModalHero}
          heroes={heroes}
        />
      )}
    </>
  );
};

export default CharactersList;
