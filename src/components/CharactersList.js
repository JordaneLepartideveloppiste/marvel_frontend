import { useState } from "react";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import ModalHero from "./ModalHero";

const CharactersList = ({ data }) => {
  return (
    <div className="characters_list">
      <div className="characters_list_content">
        <div className="characters_list_title">
          <h2>Ils sont tous là !</h2>
        </div>
        <div className="characters_cards">
          {data.results.map((hero, index) => {
            return <CharacterCard hero={hero} key={index}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default CharactersList;
