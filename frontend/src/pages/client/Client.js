import './client.css'
import React, { useEffect, useRef, useState } from 'react'
import { clients as clientsData} from './ClientsData'

const bg = ['bgBrand', 'bgUx', 'bgDesign', 'bgMotion', 'bgDev']
const colors = ['#C48957', '#538A97', '#985A7C', '#AE9282', '#B06B4E']
const categories = ["Branding", "UI/UX Design", "Graphic Design", "Motion Design", "Development"]


function Client() {

    const [clientBg, setClientBg] = useState([null, null])
    const [cord, setCord] = useState(null)
    const [clientCord, setClientCord] = useState(null)
    const [visible, setVisible] = useState(false)
    const [activeColor, setActiveColor] = useState(null)
    const [activeClient, setActiveClient] = useState(null)
    const [activeClientData, setActiveClientData] = useState(null)

    const container = useRef(null)

    //function to get the cordinates of the color bar and client (for positioning in overlay)
    const getCord = (e, category, client, data) => {
        const top = e.target.getBoundingClientRect().top - document.getElementById('clientWrapper').getBoundingClientRect().top
        const left = e.target.getBoundingClientRect().left
        const height = e.target.getBoundingClientRect().height
        const width = e.target.getBoundingClientRect().width
        setVisible(true)
        setCord({top: top, left: left, height: height, width: width})
        
        const clientImageTop = document.getElementById('client'+String(client)).getBoundingClientRect().top - document.getElementById('clientWrapper').getBoundingClientRect().top
        const clientImageLeft = document.getElementById('client'+String(client)).getBoundingClientRect().left
        setClientCord({top: clientImageTop, left: clientImageLeft})
        setActiveColor(category)
        setActiveClient(client)
        setActiveClientData(data)
    }
    
  return (
    <div className='clientContainer' id="clientContainer" onClick={() => visible ? setVisible(false) : null}>

        {visible ? (
            <div className='overlay' ref={container} style={{ zIndex: 999, position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.8)',transition: '0.2s'}}>
            <div className='closeBtn' style={{ boxShadow: '0 0 0 3px '+colors[activeColor], backgroundColor: colors[activeColor]}}></div>
            <div className={'client'} style={{position: 'absolute', top: clientCord.top, left: clientCord.left}}>
            <span className='triangle' style={{ borderLeft: '70px solid '+colors[activeColor]}}></span>
                <div className={'clientOverlay'} style={{display: 'block', backgroundColor: colors[activeColor]}}></div>
                    <img src={activeClientData.image} alt="Teho" />
                    <span className={'clientNameOverlay'} style={{backgroundColor: colors[activeColor]}}>{activeClientData.name}</span>
            </div>
      
                
            {activeClient > 1 ? (
                <div style={{ position: 'relative', top: Math.abs(cord.top-cord.height-295)+'px', left: cord.left, borderRadius: '7px', maxWidth: cord.width*1.7, height: '420px'}}>
                                <div>
                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', backgroundColor: colors[activeColor], padding: '10px', borderTopRightRadius: '7px', borderTopLeftRadius: '7px', borderBottomRightRadius: '7px'}}>
                    <span  style={{ padding: '10px', borderStyle: 'dashed'}}>
                    <img src={
                                (activeColor === "0") ? activeClientData.projectsDetails.category1.image : (activeColor === "1") ? activeClientData.projectsDetails.category2.image : (activeColor === "2") ? activeClientData.projectsDetails.category3.image : (activeColor === "3") ? activeClientData.projectsDetails.category4.image : (activeColor === "4") ? activeClientData.projectsDetails.category5.image : null
                            } alt="img" style={{width: '100%'}}/>
                    <div style={{ marginTop: '5px'}}>
                        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                            <span><span style={{fontSize: '14px', fontWeight: 700}}>Duration : </span><span style={{ fontSize: '12px'}}>{
                                (activeColor === "0") ? activeClientData.projectsDetails.category1.duration : (activeColor === "1") ? activeClientData.projectsDetails.category2.duration : (activeColor === "2") ? activeClientData.projectsDetails.category3.duration : (activeColor === "3") ? activeClientData.projectsDetails.category4.duration : (activeColor === "4") ? activeClientData.projectsDetails.category5.duration : null
                            }
                            </span></span>
                            <span><span style={{fontSize: '14px', fontWeight: 700}}>Budget : </span><span style={{ fontSize: '12px'}}>
                            {
                                (activeColor === "0") ? activeClientData.projectsDetails.category1.budget : (activeColor === "1") ? activeClientData.projectsDetails.category2.budget : (activeColor === "2") ? activeClientData.projectsDetails.category3.budget : (activeColor === "3") ? activeClientData.projectsDetails.category4.budget : (activeColor === "4") ? activeClientData.projectsDetails.category5.budget : null
                            }
                            </span></span>
                        </div>

                        <div style={{ marginTop: '10px', fontSize: '12px', lineHeight: 1.2, fontWeight: 350 }}>
                        {
                                (activeColor === "0") ? activeClientData.projectsDetails.category1.description : (activeColor === "1") ? activeClientData.projectsDetails.category2.description : (activeColor === "2") ? activeClientData.projectsDetails.category3.description : (activeColor === "3") ? activeClientData.projectsDetails.category4.description : (activeColor === "4") ? activeClientData.projectsDetails.category5.description : null
                            }
                        </div>

                        <div style={{ fontSize: '12px', marginTop: '10px', display: 'flex', justifyContent: 'flex-end'}}>
                        <a className='clientProjectLink' href={
                                (activeColor === "0") ? activeClientData.projectsDetails.category1.webLink: (activeColor === "1") ? activeClientData.projectsDetails.category2.webLink : (activeColor === "2") ? activeClientData.projectsDetails.category3.webLink : (activeColor === "3") ? activeClientData.projectsDetails.category4.webLink : (activeColor === "4") ? activeClientData.projectsDetails.category5.webLink : null
                            } target="_blank">{
                                (activeColor === "0") ? activeClientData.projectsDetails.category1.webLink: (activeColor === "1") ? activeClientData.projectsDetails.category2.webLink : (activeColor === "2") ? activeClientData.projectsDetails.category3.webLink : (activeColor === "3") ? activeClientData.projectsDetails.category4.webLink : (activeColor === "4") ? activeClientData.projectsDetails.category5.webLink : null
                            }</a>
                        </div>
                    </div>
                    </span>
                    </div>
                </div>
                <div style={{ position: 'relative', maxWidth: cord.width, backgroundColor: colors[activeColor], padding: '10px', borderBottomRightRadius: '7px', borderBottomLeftRadius: '7px'}}>
                    <div style={{ width: cord.width, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px'}}>
                        {categories[activeColor]}
                    </div>
                </div>
                </div>
            ) : (
                <div style={{ position: 'absolute', top: cord.top, left: cord.left, borderRadius: '7px', maxWidth: cord.width*1.7, height: '420px', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
                <div style={{ position: 'relative', maxWidth: cord.width, backgroundColor: colors[activeColor], padding: '10px', borderTopRightRadius: '7px', borderTopLeftRadius: '7px'}}>
                    <div style={{ width: cord.width, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px'}}>
                        {categories[activeColor]}
                    </div>
                </div>
                <div>
                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', backgroundColor: colors[activeColor], padding: '10px', borderTopRightRadius: '7px', borderBottomLeftRadius: '7px', borderBottomRightRadius: '7px'}}>
                    <span  style={{ padding: '10px', borderStyle: 'dashed'}}>
                    <img src={
                                (activeColor === "0") ? activeClientData.projectsDetails.category1.image : (activeColor === "1") ? activeClientData.projectsDetails.category2.image : (activeColor === "2") ? activeClientData.projectsDetails.category3.image : (activeColor === "3") ? activeClientData.projectsDetails.category4.image : (activeColor === "4") ? activeClientData.projectsDetails.category5.image : null
                            } alt="img" style={{width: '100%'}}/>
                    <div style={{ marginTop: '5px'}}>
                        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                            <span><span style={{fontSize: '14px', fontWeight: 700}}>Duration : </span><span style={{ fontSize: '12px'}}>{
                                (activeColor === "0") ? activeClientData.projectsDetails.category1.duration : (activeColor === "1") ? activeClientData.projectsDetails.category2.duration : (activeColor === "2") ? activeClientData.projectsDetails.category3.duration : (activeColor === "3") ? activeClientData.projectsDetails.category4.duration : (activeColor === "4") ? activeClientData.projectsDetails.category5.duration : null
                            }
                            </span></span>
                            <span><span style={{fontSize: '14px', fontWeight: 700}}>Budget : </span><span style={{ fontSize: '12px'}}>{
                                (activeColor === "0") ? activeClientData.projectsDetails.category1.budget : (activeColor === "1") ? activeClientData.projectsDetails.category2.budget : (activeColor === "2") ? activeClientData.projectsDetails.category3.budget : (activeColor === "3") ? activeClientData.projectsDetails.category4.budget : (activeColor === "4") ? activeClientData.projectsDetails.category5.budget : null
                            }
                            </span></span>
                        </div>

                        <div style={{ marginTop: '10px', fontSize: '12px', lineHeight: 1.2, fontWeight: 350 }}>
                        {
                                (activeColor === "0") ? activeClientData.projectsDetails.category1.description : (activeColor === "1") ? activeClientData.projectsDetails.category2.description : (activeColor === "2") ? activeClientData.projectsDetails.category3.description : (activeColor === "3") ? activeClientData.projectsDetails.category4.description : (activeColor === "4") ? activeClientData.projectsDetails.category5.description : null
                            }
                        </div>

                        <div style={{ fontSize: '12px', marginTop: '10px', display: 'flex', justifyContent: 'flex-end'}}>
                        <a className='clientProjectLink' href={
                                (activeColor === "0") ? activeClientData.projectsDetails.category1.webLink: (activeColor === "1") ? activeClientData.projectsDetails.category2.webLink : (activeColor === "2") ? activeClientData.projectsDetails.category3.webLink : (activeColor === "3") ? activeClientData.projectsDetails.category4.webLink : (activeColor === "4") ? activeClientData.projectsDetails.category5.webLink : null
                            } target="_blank">{
                                (activeColor === "0") ? activeClientData.projectsDetails.category1.webLink: (activeColor === "1") ? activeClientData.projectsDetails.category2.webLink : (activeColor === "2") ? activeClientData.projectsDetails.category3.webLink : (activeColor === "3") ? activeClientData.projectsDetails.category4.webLink : (activeColor === "4") ? activeClientData.projectsDetails.category5.webLink : null
                            }</a>
                        </div>
                    </div>
                    </span>
                    </div>
                </div>
            </div>
            )}
            
        </div>
        ) : <></>}



        <div className='wrapper' id='clientWrapper' style={{ zIndex: 900}}>

            <div className='clientHeaderText' style={{ letterSpacing: 10 }}>
                PORTFOLIO
            </div>

            <div className='clientTable'>
            <table cellSpacing={0} style={{ tableLayout: 'fixed', borderSpacing: "0px 30px"}}>
                <thead>
                <tr align="center">
                    <th align='left'><span style={{ marginLeft: '15px'}}>Clients</span></th>
                    <th>Branding</th>
                    <th>UI/UX Design</th>
                    <th>Graphic Design</th>
                    <th>Motion Design</th>
                    <th>Development</th>
                </tr>
                </thead>
                <tbody>
                {
                    clientsData.map(data => {
                        return (
                            <tr align="center" key={data.id}>
                                <td>
                                    <div className='client' id={'client'+String(data.id)}>
                                    <span className='triangle' style={clientBg[0]===(String(data.id-1)) ?{ borderLeft: '70px solid '+colors[clientBg[1]]}: {display: 'none'}}></span>
                                        <div className='clientOverlay' style={clientBg[0]===(String(data.id-1)) ? { display: 'block', backgroundColor: colors[clientBg[1]]} : {display: 'none'}}></div>
                                        <img src={data.image} alt={data.name} />
                                        <span className='clientNameOverlay' style={clientBg[0]===(String(data.id-1)) ? {backgroundColor: colors[clientBg[1]]}: null}>{data.name}</span>
                                    </div>
                                </td>

                                <td>
                                    <div onClick={e => {getCord(e, "0", data.id, data); }} onMouseOver={() => setClientBg([String(data.id-1), "0"])} onMouseOut={() => setClientBg([null, null])} className='brandColor categoryIndicator' style={data.projects[0] ? {visibility: 'visible'}:{visibility: 'hidden'}}></div>
                                </td>

                                <td>
                                    <div onClick={e => {getCord(e, "1", data.id, data)}} onMouseOver={() => setClientBg([String(data.id-1), "1"])} onMouseOut={() => setClientBg([null, null])} className='uxuiDesignColor categoryIndicator' style={data.projects[1] ? {visibility: 'visible'}:{visibility: 'hidden'}}></div>
                                </td>

                                <td>
                                    <div onClick={e => {getCord(e, "2", data.id, data)}} onMouseOver={() => setClientBg([String(data.id-1), "2"])} onMouseOut={() => setClientBg([null, null])} className='graphicColor categoryIndicator' style={data.projects[2] ? {visibility: 'visible'}:{visibility: 'hidden'}}></div>
                                </td>

                                <td>
                                    <div onClick={e => {getCord(e, "3", data.id,data)}} onMouseOver={() => setClientBg([String(data.id-1), "3"])} onMouseOut={() => setClientBg([null, null])} className='motionColor categoryIndicator' style={data.projects[3] ? {visibility: 'visible'}:{visibility: 'hidden'}}></div>
                                </td>

                                <td>
                                    <div onClick={e => {getCord(e, "4", data.id, data)}} onMouseOver={() => setClientBg([String(data.id-1), "4"])} onMouseOut={() => setClientBg([null, null])} className='developmentColor categoryIndicator' style={data.projects[4] ? {visibility: 'visible'}:{visibility: 'hidden'}}></div>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            </div>
 
            </div>
            
    </div>
  )
}

export default Client