import React from 'react'
import { useSelector } from 'react-redux'
import UpdateImg from './UpdateImg'

const UpdateProfil = () => {
const userData = useSelector((state) => state.rootReducer.userReducer)




  return (
    <div className='profil-container'>
        <h2>Profil de {userData.pseudo}</h2>
        <div className='update-container'>
            <div className='left-part'>
                <h3>Photo de profil</h3>              
                <img src={window.location.origin+'/image/profil'+(userData.picture)}  alt ="profil"/>
                <UpdateImg/>
            </div>
        </div>
    </div>
  )
}

export default UpdateProfil