import React from "react";
import { mainText, subSubTitle } from "../../appStructure/constants";
import "./success.scss";

function Success({ title, text }: { title: string; text: string }) {
   return (
      <div className="success">
         <div className="successContent">
            <div className="circle">
               <div className="checkmark"></div>
            </div>
            <p className={subSubTitle}>{title}</p>
            <p className={mainText}>{text}</p>
         </div>
      </div>
   );
}

export default Success;
