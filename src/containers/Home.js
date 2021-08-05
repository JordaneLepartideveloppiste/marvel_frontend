import axios from "axios";
import { useEffect, useState } from "react";
import CharactersList from "../components/CharactersList";
import Header from "../components/Header"


const Home = () => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(
            "http://localhost:4000/characters"
          );
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
        <div className="home">
            <div className="home_content">
                <Header />
                <CharactersList data={data} />
            </div>
            
        </div>
    );
};

export default Home;