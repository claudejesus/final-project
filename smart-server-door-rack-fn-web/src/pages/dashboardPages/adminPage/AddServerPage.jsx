import React from "react";
import { useState } from "react";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";
import "react-toastify/dist/ReactToastify.css";
// import {v4 as uuid} from "uuid"
import { useNavigate} from "react-router-dom";

function AddServerPage() {
  const [serverNameState, setServerNameState]= useState("");
  const [serverCodeState, setServerCodeState]=useState("");
  const [validation, setValidation]=useState("");
  const history =useNavigate();
  const addedServerContent ={serverNameState,serverCodeState};

  const handleSubmitForm = (event) => {
    event.preventDefault();
   fetch("http://localhost:5050/serverRows",{
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addedServerContent),
   }).then((response)=>{
    alert("Server Saved successfully");
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
                <h2>Add Server</h2>
              </div>
              <div className="EditFormContainer">
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
                  {serverNameState.length===0 && validation && <p className="text-danger">Enter Server Name</p>}
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
                 
                  {(serverCodeState.length === 0 || serverCodeState.length !==6)&& validation && <p className="text-danger">Enter Server Code must 5 digits</p>}
                </div>
                <input
                              type="submit"
                              className="form-control btn btn-primary"
                              value="Add"
                            />
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddServerPage;
