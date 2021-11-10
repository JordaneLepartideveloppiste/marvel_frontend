import axios from "axios";
import { useEffect, useState } from "react";
import ComicCard from "../components/ComicCard";
import Header from "../components/Header";
import '../assets/scss/Comics.scss';

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/comics");
        console.log(res.data);
        setData(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  let position = "";
  let shape = "";
 

  return isLoading ? (
    <span>Chargement des données en cours...</span>
  ) : (
    <div className="comics">
      <Header />
      <div className="comics_content">
        {data.results.map((comic, index) => {
          index%2===0?position="even":position="odd";
          index === 0 ? shape="standard": Number.isInteger(index/3) ? shape ="little" : shape="standard";
          
          return <ComicCard comic={comic} key={index} position={position} shape={shape}/>;
        })}
      </div>
    </div>
  );
};

export default Comics;
