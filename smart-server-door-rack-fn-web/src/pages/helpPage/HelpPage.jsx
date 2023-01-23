import React from 'react'
import UserSidebarDashBoard from '../../components/sideBaer/UserSidebarDashBoard'
import "./help.css"
import NextImage from "../../assets/images/nextImage.jpg"
import NextImageClick from "../../assets/images/click.png"
import OnOff from "../../assets/images/on-and-off-toggle-switch-button-red-and-green-vector-14282624.jpg"

function HelpPage() {
  return (
    <div className="Usercontainer">
      <UserSidebarDashBoard/>
      <div className="serverDashboardContainer cardsConainer">
        <div className="card" style={{width: '18rem', marginTop:"6rem"}}>
        <img className="card-img-top clikImage" style={{width: '18rem', height:'8rem'}} src={NextImageClick} alt="Card mage cap" />
        <div className="card-body">
          <h5 className="card-title">Click on Switch server</h5>
          <p className="card-text">After Click on Switch server you willl be redirected to switch sever</p>
          <a href="www.google.com" className="btn btn-primary">See ScreenShoot</a>
        </div>
      </div>

      <div className="card" style={{width: '18rem', marginTop:"6rem"}}>
        <img className="card-img-top" src={NextImage} alt="Card mage cap"/>
      </div>
      
      <div className="card" style={{width: '18rem', marginTop:"6rem"}}>
        <img className="card-img-top clikImage" style={{width: '18rem', height:'8rem'}} src={OnOff} alt="On Off" />
        <div className="card-body">
          <h5 className="card-title">Switch ON / OFF</h5>
          <p className="card-text">You are going to see switch on Button and if you click you will see anather switch OFF</p>
          <a href="www.google.com" className="btn btn-primary">See ScreenShoot</a>
        </div>
      </div>
        </div>
      
    </div>
  )
}

export default HelpPage

