import React, { useState } from "react";
import axios from "axios";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin =  async (e) => {
    e.preventDefault();

    const emailError = document.querySelector(".emailerror");
    const passwordError = document.querySelector(".passworderror");


    await axios({
      method: "post",
      url: `http://localhost:5000/api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },

    }
    )    
      .then((res) => {
        if (res.data) {        
          console.log(res.data)
          emailError.innerHTML = res.data.email;
          passwordError.innerHTML = res.data.password;
          console.log(res)
        }
  })
      .catch((err) => {
        console.log(err);
      });
      if (emailError.innerHTML === "undefined" && passwordError.innerHTML === "undefined") {
        window.location = "/";
      }
  };

  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="emailerror"></div>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="passworderror"></div>
      <br />
      <input type="submit" value="Se connecter" />
    </form>
  );
};

export default SignInForm;