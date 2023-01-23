import React from "react";
import "./pageNotFound.css";
import PageNotFoundImage from "../../assets/images/pageNotFound.png";
import { Link } from "react-router-dom";
// import PageNotFound from "../../assets/images/404 Error Page not Found with people connecting a plug-pana.png";
function PageNotFound() {
  return <div>
    <div className="ErrorPageNotFount">
      <div className="header">
        <div className="imageContainer">
          <img src={PageNotFoundImage} alt="PageNotFound" />
        </div>
        <h1>OOPS</h1>
        <p>Page you are trying to seaerch is not available</p> 
      <Link to="/"><span> Back to home</span></Link>
      </div>
    </div>
  </div>;
}

export default PageNotFound;
