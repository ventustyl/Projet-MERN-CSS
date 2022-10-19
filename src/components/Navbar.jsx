// import de react
import React from "react";
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
  "Connexion",
];
const listItems = pages.map((link) => (
  <li key={link}>
    <a href={`/${link}`}>{link}</a>
  </li>
));

const Navbar = () => {
  return (
    <nav>
      <a href="/"><img src={Logo} alt="Logo Potager" /></a>
      <ul> {listItems} </ul>
    </nav>
  );
};

export default Navbar;
