import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Link } from "react-router-dom";
function AdminSideBar() {
  return (
    <div>
      <section className="sideBarContainer">
        <Link to="/main-admin">
        <div className="adminTextContainer AdminIcon">
          <h3>
            <span>Admin</span> Dashboard
          </h3>
        </div>
        </Link>
        <Link to="/server-admin" >
        <div  className="serverIconContainer AdminIcon">
          <StorageIcon className="iconn"/>
          <p>Server</p>
        </div>
        </Link>
        <Link to="/user-admin" >
        <div className="userIconContainer AdminIcon">
          <PeopleAltIcon />
          <p>Users</p>
        </div>
        </Link>
        <Link to="/admin-report" >
        <div className="userIconContainer AdminIcon">
          <AssessmentIcon />
          <p>Report</p>
        </div>
        </Link>
      </section>
    </div>
  );
}

export default AdminSideBar;
