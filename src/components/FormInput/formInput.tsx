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
}: {
   inputType: FormInputEnum;
   handler?: (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      attr: keyof FormData
   ) => void;
   title: string;
   attribute?: keyof FormData;
   hint?: string;
   className?: string;
   checkBoxClick?: () => void;
}) {
   if (inputType === FormInputEnum.TextArea) {
      return (
         <label className={mainText}>
            <div className="messageLabel">
               <p>{title}</p>
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
               onChange={(e) => handler!(e, attribute!)}
               rows={8}
               name="name"
            />
         </label>
      );
   } else if (inputType === FormInputEnum.Field) {
      return (
         <label className={mainText}>
            {title}
            {hint != null ? <u className="hint italic">{hint}</u> : <></>}
            <input
               onChange={(e) => handler!(e, attribute!)}
               type="text"
               name="name"
            />
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
