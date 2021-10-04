import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo_marvel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalCo from "./ModalCo";
import "../assets/scss/Navbar.scss";

const Navbar = ({
  userToken,
  setUser,
  showModalCo,
  setShowModalCo,
  modalOnLogin,
  setModalOnLogin,
}) => {
  return (
    <div className="navbar">
      <div className="navbar_content">
        <div className="navbar_first_row">
          <div className="btn_top">
            <div className="connexion">
              {userToken ? (
                <>
                  <h3>Welcome, </h3>
                  <h3 id="hero">Hero</h3>
                  <Link
                    id="logout_btn"
                    onClick={() => {
                      setUser(null);
                    }}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    id="signup_btn"
                    name="signup_btn"
                    onClick={() => {
                      setShowModalCo(true);
                      setModalOnLogin(false);
                    }}
                  >
                    <span className="text_btn">Signup</span> 
                  </Link>
                  <Link
                    id="login_btn"
                    name="login_btn"
                    onClick={() => {
                      setShowModalCo(true);
                      setModalOnLogin(true);
                    }}
                  >
                    <span className="text_btn">Login</span>
                  </Link>
                </>
              )}
            </div>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo_marvel" />
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar_second_row">
          <NavLink to="/">
            <span className="text_btn">Characters</span>
            <img src="https://img.icons8.com/fluency-systems-regular/32/000000/groot.png" />
          </NavLink>
          <NavLink to="/comics">
            <span className="text_btn">Comics</span>
            <img src="https://img.icons8.com/ios/34/000000/comics-magazine.png" />
          </NavLink>
          {userToken && (
            <>
              <NavLink to="/favorites">
                <span className="text_btn">Favorites</span>
                <img src="https://img.icons8.com/windows/38/000000/captain-america.png" />
              </NavLink>
              <NavLink to="/">
                <span className="text_btn">Goodies</span>
                <img src="https://img.icons8.com/ios/38/000000/boom.png" />
              </NavLink>
            </>
          )}
        </div>
      </div>
      {showModalCo && (
        <ModalCo
          setShowModalCo={setShowModalCo}
          setModalOnLogin={setModalOnLogin}
          modalOnLogin={modalOnLogin}
          setUser={setUser}
        />
      )}
    </div>
  );
};

export default Navbar;
