import React from 'react'
import MaleAvatarSvg from '../../assets/images/maleAvatar.svg'
import FemaleAvatarSvg from '../../assets/images/femaleAvatar.svg'
import './teamCard.css'

function TeamCard({ data }) {
  return (
    <div className='memberContainer'>
        <img src={data.gender === 'm' ? MaleAvatarSvg : FemaleAvatarSvg} alt="Avatar" />
        <div className='memberName'>{data.name}</div>
        <div className='memberDesignation'>{data.designation}</div>
        {(data.description) ? 
        <div className='memberDesc'>{data.description}</div>
        : null }
    </div>
  )
}

export default TeamCard