import React, { useState } from "react";
import "./navigation.css";
import StorageIcon from "@mui/icons-material/Storage";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Logout from "./Logout";
import RedoIcon from '@mui/icons-material/Redo';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
function NavigationBar() {
  const [checkRedirection, setCheckRedition]=useState(false);
  const emailLocalStorage = localStorage.getItem("UserEmail");

   let navigation = useNavigate();

  const handleRedirection =()=>{
if(emailLocalStorage === "mhthodol@gmail.com"){
  navigation("/main-admin")
}else if(!emailLocalStorage){
  alert("Please Login First")
  
}else{
  navigation("/user-dashboard")
}
   
  }
  const handleHomeRedirection =()=>{
    navigation("/")
  }

  return (
    <div className="NavigationContainer">
      <div className="leftSideNavContainer">
        <Link to="/">
          <div className="logoIconContainer">
            <ButtonGroup size="large">
              <IconButton
                aria-label="NightlightIcon"
                className="NightlightIcon"
              >
                <StorageIcon className="logoIcon" style={{color:"white"}} />
              </IconButton>
            </ButtonGroup>
          </div>
        </Link>
        <div className="logoName">
          <span>
            <h2>
              SMART SERVER <span className="serverText">Door Lock</span>
            </h2>{" "}
          </span>
        </div>
      </div>

      <div className="rightSideNavContainer">
        <div className="redo__Icon">
        <ButtonGroup size="large">
              <IconButton
                aria-label="NightlightIcon"
                className="NightlightIcon"
              >
                <AddHomeWorkIcon className="logoIcon" onClick={handleHomeRedirection} style={{color:"white"}}/>
              </IconButton>
              
            </ButtonGroup>
            <ButtonGroup size="large">
              <IconButton
                aria-label="NightlightIcon"
                className="NightlightIcon"
              >
                <RedoIcon className="logoIcon" onClick={handleRedirection} style={{color:"white"}}/>
              </IconButton>
              
            </ButtonGroup>
          
        </div>
          <div className="goToLoginPage">
              {emailLocalStorage ? <Button variant="contained" className="loginButton">
              <Logout/>
              </Button>:
           <Link to="/login-page">
              <Button variant="contained" className="loginButton">
                Login
              </Button>
            </Link> }
          </div>
    
      </div>
    </div>
  );
}

export default NavigationBar;
