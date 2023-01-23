import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
// import { Link } from "react-router-dom";
import "./sidebar.css";

import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { Link } from "react-router-dom";
function UserSidebarDashBoard() {
  return (
    <div>  
      <section className="sideBarContainer">
        <Link to="/user-dashboard">
        <div className="adminTextContainer AdminIcon">
          <h3>
            <span>User</span> Dashboard
          </h3>
        </div>
        </Link>
        <Link to="/user-dashboard" >
        <div  className="serverIconContainer AdminIcon">
          <StorageIcon />
          <p>Server</p>
        </div>
        </Link>
        <Link to="/help">
        <div className="userIconContainer AdminIcon">
          <LiveHelpIcon />
          <p>Help</p>
        </div>
        </Link>
      </section>
    </div>
  );
}

export default UserSidebarDashBoard;
