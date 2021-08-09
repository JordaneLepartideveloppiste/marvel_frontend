import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "../assets/scss/SearchInput.scss";

const SearchInput = () => {
  const [searchField, setSearchField] = useState("Search...");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  const handleClick = () => {
    setSearchField("");
  };
  return (
    <div className="search">

      <input
        type="text"
        id="search_input"
        value={searchField}
        onChange={handleChange}
        onClick={handleClick}
      />
      <FontAwesomeIcon icon="search" color="rgb(41, 41, 41)" />
    </div>
  );
};

export default SearchInput;
