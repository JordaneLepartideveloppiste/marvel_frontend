import axios from "axios";
import { useEffect, useRef, useState } from "react";
import '../assets/scss/ModalHero.scss';
import left from "../assets/img/modal_left_b.png";
import left_hover from "../assets/img/modal_left_w.png";
import right from "../assets/img/modal_right_b.png";
import right_hover from "../assets/img/modal_right_w.png";



const ModalHero = ({heroes, heroId, setShowModalHero}) => {

    const [data, setData] = useState();
     const [isLoading, setIsLoading] = useState(true);
    const [leftBtn, setLeftBtn] = useState(left);
    const [rightBtn, setRightBtn] = useState(right);
  

    


const heroSelected = heroes.find((hero) => hero._id === heroId);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`http://localhost:4000/comics/${heroId}`);
          setData(res.data);
          setIsLoading(false);

        } catch (err) {
          console.log(err.message);
        }
      };
      fetchData();
    }, [heroId]);

    const parentRef = useRef();
    const childRef = useRef();
    
    const scroll = (scrollOffset) => {
      childRef.current.scrollLeft += scrollOffset;
    }
    

    const handleClickLeft = () => {
      
      scroll(-parentRef.current.clientWidth);
      setLeftBtn(left);
    }
    const handleClickRight = (e) => {
      scroll(parentRef.current.clientWidth);
      setRightBtn(right);
    }
   

    return isLoading ? (
      <span>Loading...</span>
    ) : (
      <div className="modal_hero" ref={parentRef}>
        <div className="modal_hero_content">
          <div className="modal_header">
            <button
              id="modalHeroClose_btn"
              onClick={() => {
                setShowModalHero(false);
              }}
            >
              X
            </button>
            <h3 id="modal-hero-name">{heroSelected.name}</h3>
          </div>
          <div className="modal_body">
            {data.comics.length > 1 ? (
              <h5 className="total-comics">
                We can find {data.comics.length} comics about{" "}
                {heroSelected.name}{" "}
              </h5>
            ) : data.comics.length === 1 ? (
              <h5 className="total-comics">
                The unique comic about {heroSelected.name}
              </h5>
            ) : (
              <h5 className="total-comics">
                Sorry, there is no comics matching with this character :{" "}
                {heroSelected.name}
              </h5>
            )}
            <div className="hero_comics" ref={childRef}>
              {data.comics.map((comic, index) => {
                let notFound = comic.thumbnail.path.indexOf(
                  "image_not_available"
                );

                return notFound === -1 ? (
                  <div className="comic_modal" key={index}>
                    <img
                      className="comic_pic"
                      src={
                        comic.thumbnail.path + "." + comic.thumbnail.extension
                      }
                      alt="comic_cover"
                    />
                    <div className="comic_content_modal">
                      <div className="comics_counter">
                        <span>{index + 1}/</span>
                        <span>{data.comics.length}</span>
                      </div>
                      <span className="comic_title">{comic.title}</span>
                      <div className="comic_description">
                        <p>{comic.description}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="comic_modal">
                    <div className="comics_counter">
                      <span>{index + 1}</span>
                      <span>/ {data.comics.length}</span>
                    </div>
                    <span className="comic_title">{comic.title}</span>
                    <div className="comic_description">
                      <p>{comic.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="modal_footer">
            <button
              className="carousel_left_btn"
              onMouseEnter={() => setLeftBtn(left_hover)}
              onMouseLeave={() => setLeftBtn(left)}
              onClick={handleClickLeft}
            >
              <img src={leftBtn} alt="left_button" />
            </button>
            <button
              className="carousel_right_btn"
              onMouseEnter={() => setRightBtn(right_hover)}
              onMouseLeave={() => setRightBtn(right)}
              onClick={handleClickRight}
            >
              <img src={rightBtn} alt="right_button" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default ModalHero;