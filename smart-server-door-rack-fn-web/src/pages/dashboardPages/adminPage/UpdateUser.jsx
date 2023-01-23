import React, { useEffect } from "react";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate, useParams} from "react-router-dom";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";


function UdateUser() {

 const [allDetails]=useState([]);
 const [userId, setUserId]=useState("")

 const {AllDetalsId}=useParams();
 console.log(AllDetalsId);
 useEffect(()=>{
   fetch(" http://localhost:5050/allDashboardContentRow/"+AllDetalsId).then((res)=>{return res.json()}).then((resp)=>{
    setUserId(resp.id);
     setUserNameState(resp.userName);
     setEmailState(resp.email);
     setUserPassword(resp.userPassword);
     setPhoneState(resp.phone);
   }).catch((err)=>{
     console.log(err.message);
   })

 },[])
 const history = useNavigate();
 const [userName, setUserNameState]=useState("");
 const [email, setEmailState] = useState("");
 const [userPassword, setUserPassword]=useState("");
 const [phone, setPhoneState] = useState("");
 const [validation, setValidation]=useState("");
  const handleSubmitForm = (event) => {
    event.preventDefault();
    
    const userContentState = {allDetails,userName, email, phone, userPassword};
    
   fetch("http://localhost:5050/userRows/"+AllDetalsId,{
    method:"PUT",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(userContentState)
   }).then((response)=>{
    alert("User Saved successfully");
    history("/user-admin")
   }).catch((err)=>console.log(err.message));

  }

  return (
    <div className="Usercontainer">
      {/* <UserSidebarDashBoard /> */}
      <AdminSideBar />
      <div className="addServerContainer">
        <div className="contentContainer userContentContainer">
          <div className="dataInTable addServer">
            <form action="" onSubmit={handleSubmitForm}>
              <div className="titleHeader addServerHeader">
                <h2>Add User </h2>
              </div>
              <div className="EditFormContainer AboutCreateUSer">
                <div className="leftSideContent">
                <div className="inputContainer userName">
                  <label htmlFor="userName">User Id <span className="text-danger text-sm-end">(Disabled)</span></label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="user id"
                    onMouseDown={(e)=>setValidation(true)}
                    value={userId}
                    disabled="disabled"
                    className="bg-secondary"
                  />
                </div>
                <div className="inputContainer userName">
                  <label htmlFor="userName">User Name</label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    className="userName"
                    placeholder="eg:Muheto Hodal"
                    onMouseDown={(e)=>setValidation(true)}
                    value={userName}
                    onChange={(e)=>setUserNameState(e.target.value)}
                  />
                  {userName.length === 0 && validation && <p className="text-danger">Enter valid name</p>}
                </div>
                <div className="inputContainer userPassword">
                  <label htmlFor="userPassword">User Password</label>
                  <input
                    type="text"
                    name="userPassword"
                    id="userPassword"
                    className="userPassword"
                    placeholder="**********"
                    onMouseDown={(e)=>setValidation(true)}
                    value={userPassword}
                    onChange={(e)=>setUserPassword(e.target.value)}
                  />
                   {/* {userPassword.length === 0 && validation && <p className="text-danger">Enter valid User Password</p>} */}
                </div>
                </div>
                <div className="inputContainer email">
                  <label htmlFor="email"> Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="email"
                    placeholder="eg:mhthodol@gmail.com"
                   onMouseDown={(e)=>setValidation(true)}
                    value={email}
                    onChange={(e)=>setEmailState(e.target.value)}
                  />
                   {/* {email.length === 0 && validation && <p className="text-danger">Enter valid Email</p>} */}
                </div>
               
                <div className="inputContainer phone">
                  <label htmlFor="phone"> Phone Number:</label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    className="phoneContact"
                    placeholder="eg:0782439775"
                    value={phone}
                    onChange={(e)=>setPhoneState(e.target.value)}
                  />
                   {/* {(phone.length === 0 || phone.length !==10)
                    && validation && <p className="text-danger">Enter valid Phone Number</p>} */}
                </div>
              
                <button className="editButton addServerButton">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UdateUser;

