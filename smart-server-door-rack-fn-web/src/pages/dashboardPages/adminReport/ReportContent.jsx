import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./report.css"
function ReportContent() {
    const [allDetails, setAllDetails]=useState([]);
    const {AllDetalsId}=useParams();
    console.log(AllDetalsId);
    useEffect(()=>{
      fetch(" http://localhost:5050/logs/"+AllDetalsId).then((res)=>{return res.json()}).then((resp)=>{
        setAllDetails(resp);
      }).catch((err)=>{
        console.log(err.message);
      })
  
    },[])
  return (
    <div>
        {allDetails && 
        <div>
         <div className="detail"><h4>User Record ID : <span>{allDetails.id}</span></h4></div>
         <div className="detail"><h4>User Email: <span>{allDetails.user}</span></h4></div>
         <div className="detail"><h4>Server Id: <span>{allDetails.server}</span></h4></div>
         <div className="detail"><h4>Date And Time: <span>{allDetails.timeStamp}</span></h4></div>
         <div className="detail"><h4>Last Action Done : <span>{allDetails.action}</span></h4></div>
         </div>
         
        }
       </div>
    
  
  )
}

export default ReportContent
