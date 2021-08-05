import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useHistory, } from "react-router-dom";
import ModalHero from "./ModalHero";

const CharacterCard = ({ hero }) => {
    const [showModalHero, setShowModalHero] = useState(false);
  const history = useHistory();

    const handleClick = () => {
        setShowModalHero(true);
       
    }

  return (
    <div className="character_card">
      <div className="character_card_content">
        <div className="image_card">
          <img
            src={hero.thumbnail.path + "." + hero.thumbnail.extension}
            alt="hero_pic"
          />
        </div>
        <div className="infos_card">
          <div className="name">
            <strong className="hero_name">{hero.name}</strong>
          </div>

          {hero.description ? (<div className="description">
            <p className="hero_description">{hero.description}</p>
          </div>) : (
              <div className="no_description">
                  <p>Ce personnage préfère resté discret...</p>
              </div>
          )}
          <Link onClick={handleClick}>Comics</Link>
            {showModalHero && (
              <ModalHero 
                hero={hero}
                showModalHero={showModalHero}
                setShowModalHero={setShowModalHero} />

          )}

        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
