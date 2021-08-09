import axios from "axios";
import { useEffect, useState } from "react";
import ComicCard from "../components/ComicCard";

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

  return isLoading ? (
    <span>Chargement des données en cours...</span>
  ) : (
    <div className="comics">
      <div className="comics_content">
        {data.results.map((comic, index) => {
          return <ComicCard comic={comic} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Comics;
