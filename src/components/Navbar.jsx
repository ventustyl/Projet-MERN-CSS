// import de react
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UidContext } from "./AppContext";

// import de scsss
import "./navbar.scss";

//import du logo
import Logo from "../images/icon.png";



// Variable qui contient les pages
const pages = [
  "Journal",
  "Legumes",
  "Fruits",
  "Aromates",
  "Astuces",
  "Contact",

];
const listItems = pages.map((link) => (
  <li key={link}>
    <a href={`/${link}`}>{link}</a>
  </li>
));


const Navbar =  () => {

  const uid =  useContext(UidContext)

  const userData = useSelector((state)=> state.rootReducer.userReducer)


  return (
    <nav>
      <a href="/"><img src={Logo} alt="Logo Potager" /></a>
      <ul> {listItems} 
      {uid ? (
        <li><a href="/connexion">Bienvenue {userData.pseudo} </a></li>
       ) : ( <li><a href="/connexion"> Connexion </a></li>
      )}
      
      </ul>
    </nav>
  );
};

export default Navbar;
