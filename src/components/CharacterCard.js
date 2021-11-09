
import { Link} from "react-router-dom";
import "../assets/scss/CharacterCard.scss"

const CharacterCard = ({ hero, setShowModalHero, setHeroId }) => {

  const handleClick = () => {
    setHeroId(hero._id);
    setShowModalHero(true);
  };
  const handleLike = () => {
    setHeroId(hero._id);
    setShowModalHero(true);
  };

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

          {hero.description ? (
            <div className="description">
              <p className="hero_description">{hero.description}</p>
            </div>
          ) : (
            <div className="no_description">
              <p className="no_hero_description">
                {hero.name} does not want to tell us his story. This contain
                will be provided in a few. Thanks for understanding...
              </p>
            </div>
          )}
          <div className="hero_btn">
            <Link className="card-char-btn to_comics" onClick={handleClick}>Comics</Link>
          <Link className="card-char-btn to_favorites" onClick={handleLike}>
            <img src="https://img.icons8.com/windows/38/000000/captain-america.png" alt="like_icon"/>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
