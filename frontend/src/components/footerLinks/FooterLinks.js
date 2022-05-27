import React from 'react'
import './footerLinks.css'

function FooterLinks({ reference }) {

  const scrollToPortfolio = () => {
    reference.current.scrollTo(0, 0+window.innerHeight+140)
  }

  return (
    <div className='footerLinks'>
        

        <div className='linksPanel'>
            <div>Services&nbsp;&nbsp;:</div>
            <div onClick={scrollToPortfolio}>Branding</div>
            <span></span>
            <div onClick={scrollToPortfolio}>UX/UI Design</div>
            <span></span>
            <div onClick={scrollToPortfolio}>Industrial Design</div>
            <span></span>
            <div onClick={scrollToPortfolio}>NFT</div>
            <span></span>
            <div onClick={scrollToPortfolio}>Software Development</div>
        </div>

        <div className='linksPanel'>
            <div>Company&nbsp;&nbsp;:</div>
            <div onClick={() => reference.current.scrollTo(0, window.innerHeight*3+140)}>Our Team</div>
            <span></span>
            <div onClick={scrollToPortfolio}>Portfolio</div>
            <span></span>
            <div onClick={() => document.getElementById('standard-basic').focus()}>Contact Us</div>
        </div>
    </div>
  )
}

export default FooterLinks