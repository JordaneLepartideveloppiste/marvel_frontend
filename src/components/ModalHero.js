import axios from "axios";
import { useEffect, useState } from "react";
import CarouselComics from "./CarouselComics";


const ModalHero = ({hero, showModalHero, setShowModalHero}) => {

    const [data, setData] = useState();
     const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`http://localhost:4000/comics/${hero._id}`);
          console.log(res.data.comics);
          setData(res.data);
          setIsLoading(false);

        } catch (err) {
          console.log(err.message);
        }
      };
      fetchData();
    }, []);

   

    return isLoading ? (
        <span>Chargement des données en cours</span>
    ) : (
        <div className="modal_hero">
            <div className="modal_hero_content">
               
        <div className="modal_header">
          <button
            id="modalClose_btn"
            onClick={() => {
              setShowModalHero(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modal_body">
            <div className="hero_comics">
                {data.comics.map((comic, index) => {
                    return (
                    <img src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt="comic_cover"/>
                    )
                })}
            </div>
        </div>
        <div className="modal_footer"></div>
            </div> 
        </div>
    );
};

export default ModalHero;