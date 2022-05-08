import React from "react";
import Spacer from "../spacer";
import "./form.scss";
import sicon from "../../assets/Icon_Submit.svg";
import { subTitle, mainText, mainTextEmph } from "../../appStructure/constants";

function Form({ title, description }: { title: string; description: string }) {
   return (
      <div className="form">
         <p className={subTitle}>{title}</p>
         <p className={mainTextEmph}>{description}</p>
         <div className="formRow">
            <label className={mainText}>
               Name
               <input className="field" type="text" name="name" />
            </label>
            <div className="fill"></div>
            <label className={mainText}>
               Email address
               <input className="field" type="text" name="name" />
            </label>
         </div>
         <div className="formRow">
            <label className={mainText}>
               Phone number 01 <u className="hint italic">- optional</u>
               <input className="field" type="text" name="name" />
            </label>
         </div>
         <button className="numButton">Add new phone number</button>
         <div className="formRow">
            <label className={mainText}>
               <div className="messageLabel">
                  <p>Message</p>
                  <Spacer></Spacer>
                  <u className="hint">Maximum text length is 500 characters</u>
               </div>
               <textarea rows={10} name="name" />
            </label>
         </div>
         <div className="checkboxRow">
            <div className="checkbox"></div>
            <label className="mainTextEmph">Add address details</label>
         </div>
         <button className="submitButton">
            <img src={sicon} alt="submit"></img>
            <label>Submit</label>
         </button>
      </div>
   );
}

export default Form;
