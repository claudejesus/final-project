/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";
import "../dashboardContent.css";
import axios from "axios";


function Report() {
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
          <div className="tableContent">
          <div className="serverDashboardContainer">
            <table className="table table-bordered">
              
              <thead className='bg-dark text-white'>
                <tr>
                  <td>ID</td>
                  <td>User Name</td>
                  <td>Server Name</td>
                  <td>Opened / closed Date</td>
                  <td>Server State</td>
                  <td>Actions</td>

                </tr>
              </thead><tbody>
                { AllLogs && AllLogs.map(item=>(
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.user}</td>
                      <td>{item.server}</td>
                      <td>{item.timeStamp}</td>
                      <td>{item.action}</td>
                      <td>
                        <React.Fragment>
                        <a onClick={(event)=>handleAllDetails(event,item.id)} className='btn btn-primary'>Details</a>
                      <a onClick={(event)=>RemoveFunction(event,item.id)} className='btn btn-danger'>Delete</a>
                      </React.Fragment>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
