import React from "react";
import jsonData from '../../listing.json'

const produits = [
  ["Artichaud", "Brocoli", "Poireaux", "Pomme de terre", "Salsifi", "Maïs", "Choux", "Epinard", "Haricot"] ,
  ["Banane", "Mangue", "Pomme", "Citron", "Pamplemousse", "Raisin", "Litchi"] ,
  ["Thym", "Basilic", "Romarin", ],
];
  

console.log(jsonData);


const bloc = produits.map((itemaccueil) => (

    // Item nombre aléatoire entre 1 et 3


    <div key={itemaccueil}> 
Découvrez les {produits[Math.floor(Math.random() * (2 - 0 + 1)) + 0][[Math.floor(Math.random() * (2 - 0 + 1)) + 0]]}
</div>
));

const Card = () => {
  return (
    <>
      <div>{bloc}</div>
    </>
  );
};

export default Card;
