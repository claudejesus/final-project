import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import { useNavigate } from "react-router-dom";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";
import "./AllDetails.css";
import MidleReport from "../adminReport/MidleReport";

function AdminServerDetails() {
  const history = useNavigate();
  let componentRef = useRef();
  const handleBackToAdminDashboard = () => {
    history("/admin-report");
  };

  return (
    <div>
      <div className="Usercontainer">
        <AdminSideBar />
        <div className="addServerContainer">
          <div className="contentContainer serverContentContainer">
            {/* component to be printed */}
            <MidleReport ref={(el) => (componentRef = el)} />
            <div className="btn-container">
            <ReactToPrint
              trigger={() => <Button>Print this out!</Button>}
              content={() => componentRef}
            />
            <button onClick={handleBackToAdminDashboard} className="btn btn-danger">Back to report</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminServerDetails;
