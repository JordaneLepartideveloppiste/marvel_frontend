import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/SignUp.scss";



const SignUp = ({ setUser, setModalOnLogin }) => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");




  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        const res = await axios.post("http://localhost:4000/user/signup", {
          pseudo,
          email,
          password,
        });
        console.log(res.data);
        if (res.data.token) {
          setUser(res.data.token);
          setFormSubmit(true);
        }
      
    } catch (err) {
      console.log(err.response);
      console.log(err.message);
      if (err.response.status === 409) {
        setErrorMessage("You seem to be already a member of our heroes team.");
      }
    }
  };

  return formSubmit ? (
    <>
      <h4 style={{ color: "#92C842" }}>
        A simple matter to be a hero, now enjoy !
      </h4>
    </>
  ) : (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <input
          className="input_pseudo"
          type="text"
          placeholder="Nickname"
          onChange={(e) => {
            setPseudo(e.target.value);
          }}
          required
        />
        <input
          className="input_email"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          className="input_password"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        {errorMessage && (
          <p className="error_message" style={{ color: "red" }}>
            {errorMessage}
          </p>
        )}

        <input className="input_submit" type="submit" value="SIGNUP" />
        <Link
          className="link_to_login"
          to="/"
          onClick={() => {
            setModalOnLogin(true);
          }}
        >
          Already got an account ? Login !
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
