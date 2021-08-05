import axios from "axios";
import { useState } from "react";
//import "../assets/css/components/Login.scss";

const Login = ({ setUser, setShowModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  /* const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password === passwordConf) {
        const res = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/login",
          {
            email, //email: email
            password, // password : password
          }
        );
        console.log(res.data);
        if (res.data.token) {
          setUser(res.data.token);
          setShowModal(false);
        }
      } else {
        setErrorMessage("Vos mots de passe ne sont pas identiques");
      }
    } catch (err) {
      console.log(err.message);
    }
  }; */

  return (
    <div className="login">
      <div className="login_content">
        <form /* onSubmit={handleSubmit} */>
          <input
            className="input_email"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onClick={() => {
              setEmail("");
            }}
            required
          />
          <input
            className="input_password"
            type="password"
            placeholder="Mot de passe"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onClick={() => {
              setPassword("");
            }}
            required
          />
          <input
            className="input_confirm_password"
            type="password"
            placeholder="Confirmation Mot de passe"
            onChange={(e) => {
              setPasswordConf(e.target.value);
            }}
            onClick={() => {
              setPasswordConf("");
            }}
            required
          />
          <p>{errorMessage}</p>
          <input className="input_submit" type="submit" value="Se connecter" />
        </form>
      </div>
    </div>
  );
};

export default Login;
