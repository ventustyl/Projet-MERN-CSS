import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/home.scss";

// Choix de la page d'accueil au hasard
const pages = ["Fruits", "Aromates", "Legumes"];



// Item nombre aléatoire entre 1 et 3
const Item = pages[Math.floor(Math.random() * (2 - 0 + 1)) + 0];

const Home = () => {
  return (
    <>
      <Navbar />
      <img src={require(`../images/${Item}.jpg`)} alt="Fond" className="hero"/> 
      <h1>Le potager "Le bonheur de manger son chez soi".</h1>
      <h2>Venez partager un moment de détente et de nature</h2>
      <div className="boutonduo">
      <a href={`/${Item}`}>  <button className="btn1"> {Item}</button></a>
        <button className="btn2">Voir le journal</button>
      </div>
      <section>
        <h3>O Potager Perso c'est quoi ?</h3>
        <p>Pendant cette dure periode ou les couts de produition de vos plats alimentaire industriel explosent.
        Apprendre a revenir à nos racines et cultiver son propre potager (en jardière sur votre balcon, en terre dans un coin de votre jardin ou dans une mini serre) peut importe la taille pour se nourrir de manière plus écolo, plus saine et plus économique.
        O Potager Perso c'est avant tout de l'entraide pour la réalisation de votre potager personnel</p>
      </section>

      <section className="carte">

       <Card />

      </section>

      <Footer />

    </>
  );
};

export default Home;
