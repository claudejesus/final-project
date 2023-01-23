/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import AdminSideBar from '../../../components/sideBaer/AdminSideBar';
import AlertDialog from '../userPage/Dialog';
function AdminAdminPage() {
  const [empData, setEmpData] = useState([])
  const navigate=useNavigate();
  useEffect(()=>{
    fetch("http://localhost:5050/serverRows").then((res)=>{return res.json()}).then((resp)=>{
      setEmpData(resp);
    }).catch((err)=>{
      console.log(err.message);
    })
  },[])

  const goToSwitchServerOnOff =(event,id)=>{
    event.preventDefault();
    navigate(`/switch-server-admin/${id}`)
  }
  
  return (
    
     
        <div className="serverDashboardContainer dataInTable">

            <table className="table table-bordered ">
              
              <thead className='bg-dark text-white'>
                <tr>
                  <td>ID</td>
                  <td>Server Name</td>
                  <td>Servver Code</td>
                  <td>Actions</td>
                </tr>
              </thead><tbody>
                { empData && empData.map(item=>(
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.serverNameState}</td>
                      <td>{item.serverCodeState}</td>
                      <td>
                        <React.Fragment>
                          <a onClick={(event)=>goToSwitchServerOnOff(event,item.id)} ><AlertDialog/></a>
                      </React.Fragment>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            
          </div>
     
  
  )
}

export default AdminAdminPage