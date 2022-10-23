import React, { useState } from "react";
import "../../styles/connexion.scss";
import SeConnecter from "./SeConnecter";
import Sinscrire from "./Sinscrire";

const Log = (props) => {
  //Stockage
  const [sinscrireModal, setSinscrireModal] = useState(props.sinscrire);
  const [seConnecterModal, setSeConnecterModal] = useState(props.SeConnecter);

  // Logique
  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSinscrireModal(true);
      setSeConnecterModal(false);
    } else if (e.target.id === "login") {
      setSeConnecterModal(true);
      setSinscrireModal(false);
    }
  };

  // Rendu
  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li
            onClick={handleModals}
            id="register"
            className={sinscrireModal ? "active-btn" : null}
          >
            S'inscrire
          </li>
          <li
            onClick={handleModals}
            id="login"
            className={seConnecterModal ? "active-btn" : null}
          >
            Se connecter
          </li>
        </ul>
        {sinscrireModal && <Sinscrire />}
        {seConnecterModal && <SeConnecter />}
      </div>
    </div>
  );
};

export default Log;
