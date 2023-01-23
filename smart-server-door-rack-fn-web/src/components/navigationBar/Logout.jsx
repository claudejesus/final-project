
import { FormControl, MenuItem, Select } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
    const emailLocalStorage = localStorage.getItem("UserEmail");
    const history =  useNavigate();
    console.log("Local storage value is", emailLocalStorage);
    const handleLogout=()=>{
        localStorage.clear();
        history("/")
        window.location.reload();
    }
  return (
    <div>
        {emailLocalStorage&&<FormControl fullWidth>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value="age"
    label="age"
    // onChange={handleChange}
  >
    <MenuItem value="age" onClick={handleLogout}>logout</MenuItem>
    <MenuItem value="age" defaultValue>{emailLocalStorage}</MenuItem>
  </Select>
</FormControl>}
      
    </div>
  )
}

export default Logout
