import React from 'react'
import CardLegumes  from '../components/CardLegumes'
import '../components/cardlegumes.scss'

const Legumes = () => {
  return (
    <div className='flex'>
    <h1>Les légumes</h1>
   <CardLegumes />
    </div>
  )
}

export default Legumes
