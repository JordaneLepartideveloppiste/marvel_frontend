

const CarouselComics = ({comic}) => {
    return (
      <div className="carousel_comics">
        <div className="carousel_comics_content">
          <img
           
            src={comic.thumbnail.path + "." + comic.thumbnail.extension}
            alt=""
          />
        </div>
      </div>
    );
};

export default CarouselComics;