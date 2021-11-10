import { Link } from "react-router-dom";
import '../assets/scss/ComicCard.scss';


const ComicCard = ({comic, position, shape}) => {

  let titleLength = comic.title.length;

    const handleClick = () => {

    }
    return (
      <div className={shape === "little" ? "little_card" : "comic_card"}>
        <div
          className={
            position === "even"
              ? "comic_card_content even"
              : "comic_card_content odd"
          }
        >
          <div className="image_card">
            <img
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt="comic_pic"
              id="comic_picture"
            />
          </div>
          <div className="infos_card">
            <div className="name">
              <strong className="comic_name" length={comic.title.length}>
                {comic.title}
              </strong>
            </div>

            {comic.description ? (
              <div className={titleLength <= 30 ? "description" : titleLength>30 && titleLength <= 50 ? "description2" : "description3"}>
                <p className="comic_description">{comic.description}</p>
              </div>
            ) : (
              <div className="no_description">
                <p>
                  The best way to get more informations may be to read it...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default ComicCard;