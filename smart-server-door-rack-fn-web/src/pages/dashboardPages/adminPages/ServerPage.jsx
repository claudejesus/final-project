/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";

function ServerPage() {
  const [serverContentState, setServerContentState] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(" http://localhost:5050/serverRows")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setServerContentState(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const LoadEdit = (event, id) => {
    event.preventDefault();
    navigate(`/server/${id}`);
  };
  const RemoveFunction = (event, id) => {
    event.preventDefault();
    if (window.confirm("Do you want to Remove ?"));

    fetch(" http://localhost:5050/serverRows/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        alert("data removed successfully");
        window.location.reload();
      })
      .then((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="Usercontainer">
      <AdminSideBar />
      <div className="serverDashboardContainer ">
        <Link to="/add-server-page">
          <div className="addButton">
            <button className="addServerButton btn btn-primary" style={{color:"white"}}>Add New Server (+)</button>
          </div>
        </Link>
        <div className="serverDashboardContainer dataInTable">
          <table className="table table-bordered ">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Server Name</td>
                <td>Servver Code</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>{serverContentState &&
                serverContentState.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.serverNameState}</td>
                    <td>{item.serverCodeState}</td>
                    <td>
                      <React.Fragment>
                        <a
                          onClick={(event) => LoadEdit(event, item.id)}
                          className="btn btn-success"
                        >Edit
                        </a>
                        <a
                          onClick={(event) => RemoveFunction(event, item.id)}
                          className="btn btn-danger"
                        >Delete
                        </a>
                      </React.Fragment>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ServerPage;
