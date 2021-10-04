import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "../assets/scss/SearchBar.scss";
import Suggestions from "./Suggestions";

const SearchBar = ({ heroesNamesList, heroes, setShowModalHero, setHeroId }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);

  console.log(heroesNamesList);

  const handleSubmit = (e) => {
    e.preventDefault();

    const matchHero = heroesNamesList.find((hero) => hero.name === searchValue);
    console.log(matchHero);
    
    setHeroId(matchHero.id);
    setShowModalHero(true);
  };

  const handleChange = (e) => {
    const suggestions = [];
    for (let i = 0; i < heroesNamesList.length; i++) {
      suggestions.push(heroesNamesList[i].name);
    }

    const matchSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
    );
    
    setSearchValue(e.target.value);
    !searchValue ? setFilteredSuggestions([]) : setFilteredSuggestions(matchSuggestions);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const handleKeyDown = (e) => {
    switch (e.keyCode) {
      case "13":
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
        setSearchValue(filteredSuggestions[activeSuggestionIndex]);
        break;
      case "38":
        if  (activeSuggestionIndex === 0) {
          return null
        }  
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
        break;
      case "40":
        if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
          return null
        }
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
        break;
      default:
        return null;
    }
  };

  

  return (
    <>
        <form id="search_form"  onSubmit={handleSubmit} >
          <div className="search">
            <input
              type="text"
              id="search_input"
              value={searchValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Search Hero..."
            />
            <button type="submit" id="search_btn">
              {filteredSuggestions.length === 0 ? <FontAwesomeIcon
                icon="search"
                color="rgb(41, 41, 41)"
              /> : <FontAwesomeIcon
                icon="times"
                color="rgb(41, 41, 41)"
              />}
            </button>
          </div>
          {showSuggestions && searchValue && (
            <Suggestions
              setSearchValue={setSearchValue}
              setShowSuggestions={setShowSuggestions}
              setFilteredSuggestions={setFilteredSuggestions}
              filteredSuggestions={filteredSuggestions}
              setActiveSuggestionIndex={setActiveSuggestionIndex}
              activeSuggestionIndex={activeSuggestionIndex}
            />
          )}
        </form>
    </>
  );
};

export default SearchBar;
