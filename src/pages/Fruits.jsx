import React from "react";
import CardFruits from "../components/CardFruits";
import '../components/cardlegumes.scss'

const Fruits = () => {
  return (
    <div className='flex'>
    <h1>Les fruits</h1>
      <CardFruits />
    </div>
  );
};

export default Fruits;
