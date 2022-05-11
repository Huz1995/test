import React, { ChangeEvent } from "react";
import { mainText } from "../../appStructure/constants";
import Spacer from "../spacer";
import { FormData } from "../../appStructure/models";
import "./formInput.scss";
import { FormInputEnum } from "../../appStructure/enum";

function FormInput({
   inputType,
   handler,
   title,
   hint,
   attribute,
   className,
   checkBoxClick,
   value,
   validation,
}: {
   inputType: FormInputEnum;
   handler?: (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => void;
   title: string;
   attribute?: string;
   hint?: string;
   className?: string;
   checkBoxClick?: () => void;
   value?: string;
   validation?: string;
}) {
   if (inputType === FormInputEnum.TextArea) {
      return (
         <label className={mainText}>
            <div className="messageLabel">
               <p>{title}</p>
               {/* if there is a hint */}
               {hint != null ? (
                  <>
                     <Spacer></Spacer>
                     <u className="hint">
                        Maximum text length is 500 characters
                     </u>
                  </>
               ) : (
                  <></>
               )}
            </div>
            <textarea
               value={value}
               onChange={(e) => handler!(e)}
               rows={8}
               name={attribute!}
            />
            <div className="validation">{validation}</div>
         </label>
      );
   } else if (inputType === FormInputEnum.Field) {
      return (
         <label className={mainText}>
            {title}
            {hint != null ? <u className="hint italic">{hint}</u> : <></>}
            <input
               value={value}
               onChange={(e) => handler!(e)}
               type="text"
               name={attribute!}
            />
            <div className="validation">{validation}</div>
         </label>
      );
   }
   return (
      <div className="checkboxRow">
         <div className={className} onClick={() => checkBoxClick!()}></div>
         <label className="mainTextEmph">Add address details</label>
      </div>
   );
}

export default FormInput;
