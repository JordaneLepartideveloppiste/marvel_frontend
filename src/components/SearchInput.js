import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
//import "../assets/css/components/SearchBar.scss";

const SearchInput = () => {
  const [searchField, setSearchField] = useState("Rechercher des articles");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  const handleClick = () => {
    setSearchField("");
  };
  return (
    <div className="search">
      <FontAwesomeIcon icon="search" color="grey" />
      <input
        type="text"
        id="search_input"
        value={searchField}
        onChange={handleChange}
        onClick={handleClick}
      />
    </div>
  );
};

export default SearchInput;
