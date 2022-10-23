import React from 'react'
import Log from '../components/Log'
import  Login from '../images/log.png'
import '../styles/connexion.scss'

const Connexion = () => {
  return (
    <div className='profil-page'>
  <div className='log-container'>
    <Log signin={false} signup={true} />
    <div className='img-container'>
      <img src={Login} alt="img-log" />
    </div>
  </div>
    </div>
  )
}

export default Connexion
