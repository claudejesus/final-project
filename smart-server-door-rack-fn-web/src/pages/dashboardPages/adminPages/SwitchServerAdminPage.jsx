/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import UserSidebarDashBoard from "../../../components/sideBaer/UserSidebarDashBoard";
import "../../helpPage/help.css";
import OffImage from "../../../assets/images/closedServerImage.jpg";
import OnOffServer from "../../../assets/images/OpenOpenServerImage.jpg"
import axios from "axios";
import moment from "moment/moment";
import { useParams } from "react-router-dom";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";

function SwitchServerAdminPage() {
  const [openServer, setOpenServer] = useState(false);
  const [serverStatus, setServerStatus]= useState([]);
  const params = useParams();
  const turnSurverOn = ()=>{
    axios.get("http://192.168.43.193/Req=30");
    log('open');
    setOpenServer(true)
  }
  const turnSurverOff = ()=>{
    axios.get("http://192.168.43.193/Req=180");
    setOpenServer(false)
    log('close');
  }

  console.log("Our clicked Server is ", params.serverId)
const getServerStatus = async()=>{
  const {data} = await axios.get("http://localhost:5050/serverRows");
  setServerStatus(data);
  const server = params.serverId;
 console.log("MY All Datas are: ", serverStatus);
 const newServerStatus = serverStatus.forEach(item=>item.id === server)

console.log("THe provided new Item is ", newServerStatus)
}


  const log = (action)=>{
    const timeStamp = moment().format('DD/MM/YYYY HH:mm:ss');
    const user = localStorage.getItem("UserEmail");
    const server = params.serverId;
    axios.post('http://localhost:5050/logs',{timeStamp,user,server,action})
  }

  return (
    <div className="Usercontainer">
      <AdminSideBar />
      <div className="openAndClose">
      <div
        className="serverDashboardContainer iframeContainer"
      >
         <div className="card" style={{width: '18rem', marginTop:"6rem"}}>

        <div className="card-body">
          <h5 className="card-title">Server Current Status</h5>
          <p className="card-text">This Server Name:</p>
          <p className="card-text">It Has Code:</p>
          <div className="status">Server is {openServer ? <span className="text-success on">ON</span> : <span className="text-danger off">OFF</span> }</div>
        </div>
      </div>
        {openServer ? (
          <div className="card" style={{ width: "25rem", marginTop: "6rem" }}>
            <img
              className="card-img-top clikImage"
              style={{ width: "25rem", height: "15rem" }}
              src={OnOffServer}
              alt="Card mage cap"
            />
            <div className="card-body serverON">
              <div className="point" id="IdPoint1">1</div>
              <div className="point" id="IdPoint2">2</div>
              <div className="point" id="IdPoint3">3</div>
              <div className="point" id="IdPoint4">4</div>
              <div className="point" id="IdPoint5">5</div>
              <div className="point" id="IdPoint6">6</div>
            </div>
          </div>
        ) : (
          <div className="card" style={{ width: "25rem", marginTop: "6rem" }}>
            <img
              className="card-img-top clikImage"
              style={{ width: "25rem", height: "15rem" }}
              src={OffImage}
              alt="Card mage cap"
            />
            <div className="card-body serverOFF">
              <div className="point on" id="IdPoint1">1</div>
              <div className="point on" id="IdPoint2">2</div>
              <div className="point on" id="IdPoint3">3</div>
              <div className="point on" id="IdPoint4">4</div>
              <div className="point on" id="IdPoint5">5</div>
              <div className="point on" id="IdPoint6">6</div>
            </div>
          </div>
        )}
       
         
        </div>
        <div className="buttonContainer">
          {!openServer ? (
          <div>
            <button className="btn btn-primary " onClick={turnSurverOn}>Turn ON server rack</button>
            {/* <button className="btn btn-primary " onClick={getServerStatus}>Check Server Status</button> */}

            </div>
          ) : (<div>
            <button className="btn btn-danger " onClick={turnSurverOff}>Turn OFF server rack</button>
            {/* <button className="btn btn-primary " onClick={getServerStatus}>Check Server Status</button> */}

            </div>

          )}
        </div>
      </div>
    </div>
  );
}

export default SwitchServerAdminPage;

