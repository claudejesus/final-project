import React, { useEffect } from "react";
import { useState } from "react";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";
import "react-toastify/dist/ReactToastify.css";
import "./AllDetails.css"
// import {v4 as uuid} from "uuid"
import { useNavigate, useParams} from "react-router-dom";

function EditServer() {

  const [serverId, setServerId]=useState([]);
  const {editServerId}=useParams();
  console.log(editServerId);
  useEffect(()=>{
    fetch(" http://localhost:5050/serverRows/"+editServerId).then((res)=>{return res.json()}).then((resp)=>{
      setServerId(resp.id);
      setServerNameState(resp.serverNameState);
      setServerCodeState(resp.serverCodeState);
    }).catch((err)=>{
      console.log(err.message);
    })

  },[])
  const [serverNameState, setServerNameState]= useState("");
  const [serverCodeState, setServerCodeState]=useState("");
  const [validation, setValidation]=useState("");
  const history =useNavigate();
  const addedServerContent ={serverId,serverNameState,serverCodeState};

  const handleSubmitForm = (event) => {
    event.preventDefault();
   fetch("http://localhost:5050/serverRows/"+editServerId,{
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addedServerContent),
   }).then((response)=>{
    alert("Server Updated successfully");
    history("/server-admin");
  
   }).catch((err)=>console.log(err.message))
   
  };

  return (
    <div className="Usercontainer">
      {/* <UserSidebarDashBoard /> */}
      <AdminSideBar />
      <div className="addServerContainer">
        <div className="contentContainer serverContentContainer">
          <div className="dataInTable addServer">
            <form onSubmit={handleSubmitForm}>
              <div className="titleHeader addServerHeader">
                <h2>Update Server Content</h2>
              </div>
              <div className="EditFormContainer">
              <div className="inputContainer serverName" id="disabledInput">
                  <label htmlFor="serverName">Server Id</label>
                  <input
                    type="text"
                    name="serverName"
                    id="serverName"
                    value={serverId}
                    className="bg-secondary"
                    disabled="disabled"
                    onMouseDown={(e)=>setValidation(true)}
                    onChange={(e)=>setServerNameState(e.target.value)}
                  />

                </div>
                <div className="inputContainer serverName">
                  <label htmlFor="serverName">Server Name <span className="text-danger">(*)</span></label>
                  <input
                    type="text"
                    name="serverName"
                    id="serverName"
                    value={serverNameState}
                    placeholder="eg: Server 1"
                    className="serverName"
                    onMouseDown={(e)=>setValidation(true)}
                    onChange={(e)=>setServerNameState(e.target.value)}
                  />
                  {/* {serverNameState.length===0 && validation && <p className="text-danger">Enter Server Name</p>} */}
                </div>
                <div className="inputContainer serverCode">
                  <label htmlFor="serverCode">Server Code <span className="text-danger">(*)</span></label>
                  <input
                    type="text"
                    name="serverCode"
                    id="serverCode"
                    value={serverCodeState} 
                    placeholder="eg: 202303"
                    className="serverCode"
                    onMouseDown={(e)=>setValidation(true)}
                    onChange={(e)=>setServerCodeState(e.target.value)}
                  />
                  {/* {(serverCodeState.length === 0 || serverCodeState.length !==6)&& validation && <p className="text-danger">Enter Server Code must 5 digits</p>} */}
                </div>
                <input
                  type="submit"
                  className="form-control btn btn-primary"
                  value="Update Server"
                            />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditServer;
