import React, { useEffect, useState } from "react";
import "../user.css";
import loginPageBackGroundImage from "../../../assets/images/LoginBackgroundImage.png";
import { useFormik } from "formik";
import { basicSchema } from "./Schema";
import {useNavigate} from "react-router-dom";
import axios from 'axios';



function LoginPage() {
   const [content, setContent]=useState([]);
   const [ExistingUsers,setExistingUsers] = useState([]);

   

   const fetchAllUser = async()=>{
    const {data} =  await axios.get("http://localhost:5050/userRows");
    console.log(data)
    setExistingUsers(data)
   }

   useEffect(()=>{
      fetchAllUser();
   },[content])
  const history = useNavigate();



  const onSubmit = async (values, actions) => {

    const emailExist = ExistingUsers.find(user=>user.email===values.email);
    if(emailExist){
      const passwordisTrue = emailExist.userPassword===values.password ? true :false;
      console.log(emailExist)
      if(passwordisTrue){
        const redirectUrl = emailExist.role==="ADMIN" ? "/main-admin" :"/user-dashboard";
        localStorage.setItem("UserEmail",values.email)
        localStorage.setItem("UserPassword",values.password)
        history(redirectUrl);
        window.location.reload();
      }else{
        alert("Wrong inputs");
      }

    }else{
      alert("Wrong inputs ");
    }

    console.log("The current value is :",values.email);
    console.log("The current Password is : ",values.password);
  
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  


  return (
    <div className="formContainerRegister">
      <div className="user-pageContainer">
        <div className="leftImageContainer">
          <img src={loginPageBackGroundImage} alt="" />
        </div>
        <div className="RightContentContainer">
          <form className="insiderDivision" onSubmit={handleSubmit} autoComplete="off">
            <div className="inputContainer">
              <label htmlFor="Email">
                Email <span className="noEmptySpace">(*)</span>
              </label>
              <input
                value={values.email}
                onChange={handleChange}
                type="email"
                placeholder="eg: mhthodol@gmail.com "
                name="email"
                id="email"
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
              />
            </div>
            {errors.email && touched.email && <p className="error">{errors.email}</p>}

            <div className="inputContainer">
              <label htmlFor="FullName">
                Password <span className="noEmptySpace">(*)</span>
              </label>
              <input
                type="password"
                placeholder="**********************"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password ? "input-error" : ""}
              />
              {errors.password && touched.password && <p className="error">{errors.password}</p>}
            </div>
            <button className="registerButton" disabled={isSubmitting} type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
