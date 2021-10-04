import axios from "axios";
import { useState } from "react";
import "../assets/scss/Login.scss";

const Login = ({ setUser, setShowModalCo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
        const res = await axios.post(
          "http://localhost:4000/user/login",
          {
            email, //email: email
            password, // password : password
          }
        );
        console.log(res.data);
        if (res.data.token) {
          setUser(res.data.token);
          setShowModalCo(false);
        }
      
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="login">
      <div className="login_content">
        <form onSubmit={handleSubmit}>
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
          
          <p>{errorMessage}</p>
          <input className="input_submit" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
