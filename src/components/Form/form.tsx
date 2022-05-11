import { ChangeEvent, FormEvent, useState } from "react";
import "./form.scss";
import sicon from "../../assets/Icon_Submit.svg";
import { subTitle, mainTextEmph } from "../../appStructure/constants";
import { FormData } from "../../appStructure/models";
import FormInput from "../FormInput/formInput";
import { FormInputEnum } from "../../appStructure/enum";
import {
   CreateFormObject,
   GenerateDataForApi,
   GetValidationObject,
   GenPhoneNumberTitle,
} from "../../appStructure/formHelpers";
import Success from "../Success/success";

function Form({ title, description }: { title: string; description: string }) {
   const formId = "testForm";
   const [formState, setFormState] = useState<FormData>(CreateFormObject(null));
   const [validationState, setValidationState] = useState<FormData>(
      CreateFormObject(null)
   );
   const [phoneNumberState, setPhoneNumberState] = useState<string[]>([""]);
   const [checkboxState, setCheckboxState] = useState<boolean>(false);
   const [success, setSucess] = useState<boolean>(false);

   const handleFormChange = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      event.preventDefault();
      const key = event.target.name as keyof FormData;
      //create new state from prev state
      const newState: FormData = CreateFormObject(formState);
      //set new data in state
      newState[key] = event.target.value;
      setFormState(newState);
   };

   const handleCheckboxChange = () => {
      setCheckboxState(!checkboxState);
   };

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      //convert data for api
      const dataForApi = GenerateDataForApi(
         formState,
         phoneNumberState,
         checkboxState
      );
      console.log(dataForApi);
      const requestOptions = {
         method: "post",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
         body: JSON.stringify(dataForApi),
      };
      fetch(
         "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
         requestOptions
      )
         .then((res) => res.json())
         .then((data) => {
            if (data.Status === "1") {
               setFormState(CreateFormObject(null));
               setValidationState(CreateFormObject(null));
               setPhoneNumberState([""]);
               setCheckboxState(false);
               setSucess(true);
            }
            if (data.Status === "0") {
               console.log(data.Errors);
               const validation = GetValidationObject(data.Errors);
               setValidationState(validation);
               console.log(validation);
            }
         })
         .catch((e) => console.log(e));
   };

   const genNewNum = () => {
      if (phoneNumberState.length < 3) {
         let array = [...phoneNumberState, ""];
         setPhoneNumberState(array);
      }
   };

   const handleNumberChange = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      //index is passed as name param in input
      const index = parseInt(event.target.name);
      var newArray = [...phoneNumberState];
      newArray[index] = event.target.value;
      setPhoneNumberState(newArray);
   };

   const renderWhenCheckboxTicked = (): JSX.Element => {
      if (checkboxState === true) {
         return (
            <>
               <div id="addessRow" className="formRow">
                  <FormInput
                     inputType={FormInputEnum.Field}
                     handler={handleFormChange}
                     title="Address line 1"
                     attribute="addressLine1"
                     value={formState.addressLine1}
                     validation={validationState.addressLine1}
                  ></FormInput>
                  <div className="fill"></div>
                  <FormInput
                     inputType={FormInputEnum.Field}
                     handler={handleFormChange}
                     title="Address line 2"
                     hint="- optional"
                     attribute="addressLine2"
                     value={formState.addressLine2}
                  ></FormInput>
               </div>
               <div id="bottomRow" className="formRow">
                  <div className="subRow">
                     <FormInput
                        inputType={FormInputEnum.Field}
                        handler={handleFormChange}
                        title="City/Town"
                        attribute="cityTown"
                        value={formState.cityTown}
                        validation={validationState.cityTown}
                     ></FormInput>
                     <div className="fill2"></div>
                     <FormInput
                        inputType={FormInputEnum.Field}
                        handler={handleFormChange}
                        title="State/County"
                        attribute="stateCounty"
                        value={formState.stateCounty}
                        validation={validationState.stateCounty}
                     ></FormInput>
                  </div>
                  <div id="middleFill" className="fill2"></div>
                  <div className="subRow">
                     <FormInput
                        inputType={FormInputEnum.Field}
                        handler={handleFormChange}
                        title="Postcode"
                        attribute="postcode"
                        value={formState.postcode}
                        validation={validationState.postcode}
                     ></FormInput>
                     <div className="fill2"></div>
                     <FormInput
                        inputType={FormInputEnum.Field}
                        handler={handleFormChange}
                        title="Country"
                        attribute="country"
                        value={formState.country}
                        validation={validationState.country}
                     ></FormInput>
                  </div>
               </div>
            </>
         );
      } else {
         return <></>;
      }
   };

   const renderFormBody = () => {
      if (success === true) {
         return (
            <Success
               title="Your message has been sent"
               text="We will be in contact with you within 24 hours"
            ></Success>
         );
      }
      return (
         <form id={formId} onSubmit={(e) => handleSubmit(e)}>
            <div className="formRow">
               <FormInput
                  inputType={FormInputEnum.Field}
                  handler={handleFormChange}
                  title="Name"
                  attribute="name"
                  value={formState.name}
                  validation={validationState.name}
               ></FormInput>
               <div className="fill"></div>
               <FormInput
                  inputType={FormInputEnum.Field}
                  handler={handleFormChange}
                  title="Email address"
                  attribute="email"
                  value={formState.email}
                  validation={validationState.email}
               ></FormInput>
            </div>

            {phoneNumberState.map((number, i) => (
               <div id={i.toString()} className="formRow">
                  <FormInput
                     inputType={FormInputEnum.Field}
                     handler={handleNumberChange}
                     title={GenPhoneNumberTitle(i)}
                     hint="- optional"
                     value={phoneNumberState[i]}
                     attribute={i.toString()}
                  ></FormInput>
               </div>
            ))}

            <button
               type="button"
               onClick={() => genNewNum()}
               className="numButton"
            >
               Add new phone number
            </button>

            <div className="formRow">
               <FormInput
                  inputType={FormInputEnum.TextArea}
                  handler={handleFormChange}
                  title="Message"
                  hint="Maximum text length is 500 characters"
                  attribute="message"
                  value={formState.message}
                  validation={validationState.message}
               ></FormInput>
            </div>

            <FormInput
               inputType={FormInputEnum.Checkbox}
               title="Add address details"
               className={
                  checkboxState === false ? "checkbox" : "checkbox active"
               }
               checkBoxClick={handleCheckboxChange}
            ></FormInput>

            {renderWhenCheckboxTicked()}

            <button type="submit" className="submitButton">
               <img src={sicon} alt="submit"></img>
               <label>Submit</label>
            </button>
         </form>
      );
   };

   return (
      <div className={checkboxState === false ? "formClosed" : "formOpen"}>
         <p className={subTitle}>{title}</p>
         <p className={mainTextEmph}>{description}</p>
         {renderFormBody()}
      </div>
   );
}

export default Form;
