import { Link } from "react-router-dom";


const ComicCard = ({comic}) => {
    return (
      <div className="comic_card">
        <div className="comic_card_content">
          <div className="image_card">
            <img
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt="comic_pic"
            />
          </div>
          <div className="infos_card">
            <div className="name">
              <strong className="comic_name">{comic.name}</strong>
            </div>

            {comic.description ? (
              <div className="description">
                <p className="comic_description">{comic.description}</p>
              </div>
            ) : (
              <div className="no_description">
                <p>Le meilleur moyen d'en savoir plus sera de le lire...</p>
              </div>
            )}
            <div className="characters_in">
              <Link /* onClick={handleClick} */>Comics</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ComicCard;