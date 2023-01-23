/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";
import "../dashboardContent.css";
import axios from "axios";
import AdminAdminPage from "../adminPage/AdminAdminPage";

function MainAdminPage() {
  const [allDetails, setEmpData] = useState("")
  const [content, setContent]=useState([]);
  const [ExistingUsers, setExistingUsers]=useState([]);
  const [AllLogs, setAllLogs]=useState([]);
  const navigate=useNavigate();

  useEffect(()=>{
    fetch("http://localhost:5050/serverRows").then((res)=>{return res.json()}).then((resp)=>{
      setEmpData(resp);
      }).catch((err)=>{
      console.log(err.message);
    })

  },[])


  const RemoveFunction =(event,id)=>{
    event.preventDefault();
    if(window.confirm("Do you want to Remove ?")){
    fetch("http://localhost:5050/logs/"+id,{
      method: "DELETE",
    })
      .then((res) => {
        alert("Data removed successfully");
        console.log("The delete detail Id is", id)
        window.location.reload()

      })
      .then((err) => {console.log(err.message)});
    }else{
      navigate("/")
    }
  };
  
  
  const handleAllDetails =(event,id)=>{
    event.preventDefault();
    navigate("/admin-server/details/"+id)
  }


  //user routes fetch

  const fetchAllUser = async()=>{
    const {data} =  await axios.get("http://localhost:5050/userRows");
    setExistingUsers(data)
   }

   useEffect(()=>{
      fetchAllUser();
   },[content]);

   ///ALll Logs

   const fetchAllLogs = async()=>{
    const {data} =  await axios.get("http://localhost:5050/logs");
    console.log("All Users LOGS:::::",data)
    setAllLogs(data)
   }

   useEffect(()=>{
      fetchAllLogs();
   },[content])

   return (
    <div className="Usercontainer">
      {/* <UserSidebarDashBoard /> */}
      <AdminSideBar />
      <div className="contentContainer">
        <div className="AllDataOverViewContainer">
          <div className="availableContent">
            <h3>All Serves Available</h3>
            <p>{allDetails.length}</p>
          </div>
          <div className="availableContent">
            <h3>All Users Available</h3>
            <p>{ExistingUsers.length}</p>
          </div>
        </div>

        <div className="dataInTable">
          <div className="titleHeader">
            <h3>Server Room Status</h3>
          </div>
         <AdminAdminPage/>
        </div>
      </div>
    </div>
  );
}

export default MainAdminPage;
