import { Link, NavLink } from "react-router-dom"
import logo from "../assets/img/logo_marvel.png"
import SearchInput from "./SearchInput"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalCo from "./ModalCo";

const Navbar = ({userToken, setUser, showModalCo, setShowModalCo, modalOnLogin, setModalOnLogin}) => {


    return (
      <div className="navbar">
        <div className="navbar_content">
          <div className="navbar_first_row">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo_marvel" />
              </Link>
            </div>
            <SearchInput />
            <div className="connexion">
              {/* {userToken ? (
                <Link
                  id="logout_btn"
                  onClick={() => {
                    setUser(null);
                  }}
                >
                  Déconnecte-toi
                </Link>
              ) : (
                <> */}
                  <Link
                    id="signup_btn"
                    name="signup_btn"
                    onClick={() => {
                      setShowModalCo(true);
                      setModalOnLogin(false);
                    }}
                  >
                    Inscris-toi
                  </Link>
                  <Link
                    id="login_btn"
                    name="login_btn"
                    onClick={() => {
                      setShowModalCo(true);
                      setModalOnLogin(true);
                    }}
                  >
                    Connecte-toi
                  </Link>
                  {showModalCo && (
                    <ModalCo
                      setShowModalCo={setShowModalCo}
                      setModalOnLogin={setModalOnLogin}
                      modalOnLogin={modalOnLogin}
                      setUser={setUser}
                    />
                  )}
                {/* </>
              )} */}
            </div>
            
          
            <FontAwesomeIcon
              icon="bars"
              className="menu_burger"
              color="rgba(76, 76, 76, 0.6)"
            />
          </div>
          <div className="navbar_second_row">
            <NavLink to="/">Les Personnages</NavLink>
            <NavLink to="/comics">Les Comics</NavLink>
            <NavLink to="/favorites">Tes favoris</NavLink>
          </div>
        </div>
      </div>
    );
};

export default Navbar;