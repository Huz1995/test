import React from "react";
import { mainText, subSubTitle } from "../../appStructure/constants";
import "./success.scss";

function Success() {
   return (
      <div className="success">
         <div className="successContent">
            <div className="circle">
               <div className="checkmark"></div>
            </div>
            <p className={subSubTitle}>Your message has been sent</p>
            <p className={mainText}>
               We will be in contact with you within 24 hours
            </p>
         </div>
      </div>
   );
}

export default Success;
