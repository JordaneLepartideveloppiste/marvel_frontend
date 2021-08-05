import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
//import "../assets/css/components/SignUp.scss";

const SignUp = ({ setUser, setShowModalCo, setModalOnLogin }) => {
  const [username, setUsername] = useState("Nom");
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Mot de passe");
  const [errorMessage, setErrorMessage] = useState("");




  /* const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email,
          username,
          password,
        }
      );
      console.log(res.data);
      if (res.data.token) {
        setUser(res.data.token);
        setShowModalCo(false);
      }
    } catch (err) {
      console.log(err.response);
      console.log(err.message);
      if (err.response.status === 409) {
        setErrorMessage("Il semblerait que tu es déjà inscrit.");
      }
    }
  }; */

  return (
    <div className="signup">
      <form /* onSubmit={handleSubmit} */>
        <input
          className="input_name"
          type="text"
          placeholder={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          onClick={() => {
            setUsername("");
          }}
          required
        />
        <input
          className="input_email"
          type="email"
          placeholder={email}
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
          placeholder={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onClick={() => {
            setPassword("");
          }}
          required
        />
        {errorMessage && (
          <p className="error_message" style={{ color: "red" }}>
            {errorMessage}
          </p>
        )}

        

        <input className="input_submit" type="submit" value="S'inscrire" />
        <Link
          className="link_to_login"
          to="/login"
          onClick={() => {
            setModalOnLogin(true);
          }}
        >
          Tu as déjà un compte? Connecte-toi !
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
