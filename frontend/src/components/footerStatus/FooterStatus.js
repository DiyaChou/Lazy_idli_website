import React from 'react'
import './footerStatus.css'
import Logo from '../../assets/images/logo.svg'

const titles = [{
    "title": "Contact",
    "id": 1,
    "time": "1 Week"
},
{
    "title": "Requirement",
    "id": 2,
    "time": "1 Week"
}, 
{
    "title": "Proposal",
    "id": 3,
    "time": "1 Week"
}, 
{
    "title": "Acceptance",
    "id": 4,
    "time": "1 Week"
},
{
    "title": "Start Project",
    "id": 5,
    "time": "1 Week"
}]

function FooterStatus({ active=1 }) {
  return (
    <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '30px'}}>
    <div className='statusContainer'>
        {
            titles.map((data) => {
                return (
                    <div className='status' key={data.id}>
                        <div className='elipseStatus'>
                            <div className={data.id === active ? 'elipse statusActive':'elipse'}></div>
                            <div className='statusDuration' style={data.id === 5 ? {visibility: 'hidden'}:{display: 'block'}}>
                                <p className='statusWeeks'>{data.time}</p>
                                <div className='statusArrow'></div>
                            </div>
                        </div>
                        <div className='statusTitle'>{data.title}</div>
                    </div>
                )
            })
        }
    </div>
    <div className='linksPanelStatus'>
    <div className='linksLogo'>
        <img src={Logo}  alt="" />
        <span>LAZY IDLI</span>
    </div>
    <div>
        <img src={require('../../assets/images/location_on.png')} alt="" />
        <span>IKP Eden, Kormangala, Bangalore</span>
    </div>
    <div>
        <img src={require('../../assets/images/email.png')} alt="" />
        <span>abc@gmail.com</span>
    </div>
    <div>
        <img src={require('../../assets/images/call.png')} alt="" />
        <span>8117651234</span>
    </div>
</div>
</div>
  )
}

export default FooterStatus