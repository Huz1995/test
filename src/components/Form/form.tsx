import { ChangeEvent, FormEvent, useState } from "react";
import "./form.scss";
import sicon from "../../assets/Icon_Submit.svg";
import { subTitle, mainTextEmph } from "../../appStructure/constants";
import { FormData } from "../../appStructure/models";
import FormInput from "../FormInput/formInput";
import { FormInputEnum } from "../../appStructure/enum";

function Form({ title, description }: { title: string; description: string }) {
   const [formState, setFormState] = useState<FormData>({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
      addressLine1: "",
      addressLine2: "",
      cityTown: "",
      stateCounty: "",
      postcode: "",
      country: "",
   });

   const [checkboxState, setCheckboxState] = useState<boolean>(false);

   const handleFormChange = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      attr: keyof FormData
   ) => {
      event.preventDefault();
      //create new state from prev state
      const newState: FormData = {
         name: formState.name,
         email: formState.email,
         phoneNumber: formState.phoneNumber,
         message: formState.message,
         addressLine1: formState.addressLine1,
         addressLine2: formState.addressLine2,
         cityTown: formState.cityTown,
         stateCounty: formState.stateCounty,
         postcode: formState.postcode,
         country: formState.country,
      };
      newState[attr] = event.target.value;
      setFormState(newState);
   };

   const handleCheckboxChange = () => {
      setCheckboxState(!checkboxState);
   };

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const dataForApi = {
         FullName: formState.name,
         EmailAddress: formState.email,
         PhoneNumber:
            formState.phoneNumber === "" ? [] : [formState.phoneNumber],
         message: formState.message,
         bIncludeAddressDetails: checkboxState,
         AddressDetails: {
            AddressLine1: formState.addressLine1,
            AddressLine2: formState.addressLine2,
            CityTown: formState.cityTown,
            StateCounty: formState.stateCounty,
            Postcode: formState.postcode,
            Country: formState.country,
         },
      };
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
         .then((data) => console.log(data))
         .catch((e) => console.log(e));
   };

   const renderWhenCheckboxTicked = (): JSX.Element => {
      if (checkboxState === true) {
         return (
            <>
               <div className="formRow">
                  <FormInput
                     inputType={FormInputEnum.Field}
                     handler={handleFormChange}
                     title="Address line 1"
                     attribute="addressLine1"
                  ></FormInput>
                  <div className="fill"></div>
                  <FormInput
                     inputType={FormInputEnum.Field}
                     handler={handleFormChange}
                     title="Address line 2"
                     hint="- optional"
                     attribute="addressLine2"
                  ></FormInput>
               </div>
               <div id="bottomRow" className="formRow">
                  <div className="subRow">
                     <FormInput
                        inputType={FormInputEnum.Field}
                        handler={handleFormChange}
                        title="City/Town"
                        attribute="cityTown"
                     ></FormInput>
                     <div className="fill2"></div>
                     <FormInput
                        inputType={FormInputEnum.Field}
                        handler={handleFormChange}
                        title="State/County"
                        attribute="stateCounty"
                     ></FormInput>
                  </div>
                  <div id="middleFill" className="fill2"></div>
                  <div className="subRow">
                     <FormInput
                        inputType={FormInputEnum.Field}
                        handler={handleFormChange}
                        title="Postcode"
                        attribute="postcode"
                     ></FormInput>
                     <div className="fill2"></div>
                     <FormInput
                        inputType={FormInputEnum.Field}
                        handler={handleFormChange}
                        title="Country"
                        attribute="country"
                     ></FormInput>
                  </div>
               </div>
            </>
         );
      } else {
         return <></>;
      }
   };

   return (
      <div className={checkboxState === false ? "formClosed" : "formOpen"}>
         <p className={subTitle}>{title}</p>
         <p className={mainTextEmph}>{description}</p>

         <form onSubmit={(e) => handleSubmit(e)}>
            <div className="formRow">
               <FormInput
                  inputType={FormInputEnum.Field}
                  handler={handleFormChange}
                  title="Name"
                  attribute="name"
               ></FormInput>
               <div className="fill"></div>
               <FormInput
                  inputType={FormInputEnum.Field}
                  handler={handleFormChange}
                  title="Email address"
                  attribute="email"
               ></FormInput>
            </div>

            <div className="formRow">
               <FormInput
                  inputType={FormInputEnum.Field}
                  handler={handleFormChange}
                  title="Phone number 01"
                  hint="- optional"
                  attribute="phoneNumber"
               ></FormInput>
            </div>

            <button className="numButton">Add new phone number</button>

            <div className="formRow">
               <FormInput
                  inputType={FormInputEnum.TextArea}
                  handler={handleFormChange}
                  title="Message"
                  hint="Maximum text length is 500 characters"
                  attribute="message"
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
      </div>
   );
}

export default Form;
