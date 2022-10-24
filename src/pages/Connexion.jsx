import React, { useContext } from "react";
import Log from "../components/Log";
import Login from "../images/log.png";
import "../styles/connexion.scss";
import { UidContext } from "../components/AppContext";
import Logout from "../components/Log/Logout";

const Connexion = () => {
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? (
        <>
        <div>
        <h1 className="static">Page administration</h1>        
          Bienvenue sur la partie administration
          <Logout />
        </div>
        </>
   
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div className="img-container">
            <img src={Login} alt="img-log" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Connexion;
