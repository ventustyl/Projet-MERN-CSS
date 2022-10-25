import React from "react";
import imgerreur404 from "../images/imgerreur404.png";
import "../styles/erreur404.scss";

const Erreur404 = () => {
  return (
    <div className="flex">

      <img className="img-erreur" src={imgerreur404} alt="erreur 404" />
      <p>
        Ça ne se plante pas ou ça ne pousse pas <br /> Essayer autre chose
      </p>
      <div>
        <a href="/">
          <span class="text">Accueil</span>
          <span class="line -right"></span>
          <span class="line -top"></span>
          <span class="line -left"></span>
          <span class="line -bottom"></span>
        </a>
      </div>
    </div>
  );
};

export default Erreur404;
