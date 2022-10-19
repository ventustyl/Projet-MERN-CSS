import React from "react";
import Navbar from "../components/Navbar";
import "../styles/home.scss";

const pages = ["Fruits", "Aromates", "Legumes"];
const Item = pages[Math.floor(Math.random() * (2 - 0 + 1)) + 0];
console.log(Item)
const Home = () => {
  return (
    <div>
      <Navbar />
      <img src={require(`../images/${Item}.jpg`)} alt="Fond" className="hero"/> 
      <h1>Le potager "Le bonheur de manger son chez soi".</h1>
      <h2>Venez partager un moment de détente et de nature</h2>
      <div className="boutonduo">
      <a href={`/${Item}`}>  <button className="btn1"> {Item}</button></a>
        <button className="btn2">Voir le journal</button>
      </div>
    </div>
  );
};

export default Home;
