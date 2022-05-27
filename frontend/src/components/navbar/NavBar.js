import React from 'react'
import './navBar.css'
import Logo from '../../assets/images/logo.svg'
import LogoTitle from '../../assets/images/logo_title.svg'

function NavBar() {

  const hireBtnHandler = () => {
    var footerEle = document.getElementById('footer')
    footerEle.scrollIntoView()
  }

  return (
    <div className='navbarContainer'>
      
      <div className='logo'>
        <img src={Logo} alt="logo" />
        <img src={LogoTitle} alt="Lazy Idli" />
      </div>

      <div className='hireButton' onClick={hireBtnHandler}>
        <span>Hire Us</span>
      </div>
      
    </div>
  )
}

export default NavBar