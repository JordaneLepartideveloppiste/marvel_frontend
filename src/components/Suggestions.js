import React from 'react';

const Suggestions = ({filteredSuggestions, setFilteredSuggestions, setSearchValue, setActiveSuggestionIndex, activeSuggestionIndex, setShowSuggestions}) => {
    const handleClickSuggestion = (e) => {
      setSearchValue(e.target.innerText);
      setFilteredSuggestions([]);
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
    };
    
    return filteredSuggestions.length ? (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
            
          return (
            <li
              key={index}
              className={
                index === activeSuggestionIndex
                  ? "suggestion suggestion-active"
                  : "suggestion"
              }
              onClick={handleClickSuggestion}
            >
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div class="no-suggestions">
        <em>No suggestions, you're on your own!</em>
      </div>
    );
};

export default Suggestions;