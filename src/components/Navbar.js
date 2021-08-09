import { Link, NavLink } from "react-router-dom"
import logo from "../assets/img/logo_marvel.png"
import SearchInput from "./SearchInput"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalCo from "./ModalCo";
import "../assets/scss/Navbar.scss"
import CharactersList from "./CharactersList";

const Navbar = ({userToken, setUser, showModalCo, setShowModalCo, modalOnLogin, setModalOnLogin}) => {


    return (
      <div className="navbar">
        <div className="navbar_content">
          <div className="navbar_first_row">
            <div className="btn_top">
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
                  /* onClick={() => {
                    setShowModalCo(true);
                    setModalOnLogin(false);
                  }} */
                >
                  <span className="text_btn">Signup</span>
                  <FontAwesomeIcon icon="sign-in-alt" className="icon_btn" fontSize="2rem"/>
                </Link>
                <Link
                  id="login_btn"
                  name="login_btn"
                  /* onClick={() => {
                    setShowModalCo(true);
                    setModalOnLogin(true);
                  }} */
                >
                  <span className="text_btn">Login</span>
                  <FontAwesomeIcon icon="user-circle" className="icon_btn" fontSize="1.4rem"/>
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
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo_marvel" />
                </Link>
              </div>
              <SearchInput />
            </div>
          </div>

          <div className="navbar_second_row">
            <NavLink to="/">
              <span className="text_btn">Characters</span>
              <FontAwesomeIcon icon="mask" className="icon_btn" />
            </NavLink>
            <NavLink to="/comics">
              <span className="text_btn">Comics</span>
              <FontAwesomeIcon icon="book-open" className="icon_btn" />
            </NavLink>
            <NavLink to="/favorites">
              <span className="text_btn">Your Favorites</span>
              <FontAwesomeIcon icon="heart" className="icon_btn" />
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default Navbar;