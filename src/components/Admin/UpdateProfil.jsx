import React from 'react'
import { useSelector } from 'react-redux'

const UpdateProfil = () => {
const userData = useSelector((state) => state.rootReducer.userReducer)

  return (
    <div className='profil-container'>
        <h2>Profil de {userData.pseudo}</h2>
        <div className='update-container'>
            <div className='left-part'>
                <h3>Photo de profil</h3>
                <img src={userData.picture} alt ="profil"/>
            </div>
        </div>
    </div>
  )
}

export default UpdateProfil