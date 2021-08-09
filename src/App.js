
import './App.scss';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faHeart,
  faBars,
  faCaretSquareDown,
  faCaretSquareUp,
  faMinusCircle,
  faPlusCircle,
  faSignInAlt,
  faMask,
  faBookOpen,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Comics from './containers/Comics';
import Favorites from './containers/Favorites';
library.add(
  faSearch,
  faHeart,
  faBars,
  faCaretSquareDown,
  faCaretSquareUp,
  faMinusCircle,
  faPlusCircle,
  faSignInAlt,
  faMask,
  faBookOpen,
  faUserCircle,
);

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [showModalCo, setShowModalCo] = useState(false);
  const [modalOnLogin, setModalOnLogin] = useState(false);

  const setUser = (token) => {
    Cookies.set("userToken", token, { expires: 30 });
    setUserToken(token);
  };

  return (
    <Router>
      <Navbar
        setUser={setUser}
        userToken={userToken}
        setShowModalCo={setShowModalCo}
        setModalOnLogin={setModalOnLogin}
        showModalCo={showModalCo}
        modalOnLogin={modalOnLogin}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/comics">
         <Comics />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
