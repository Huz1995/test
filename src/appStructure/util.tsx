import { FormData } from "./models";

export const CreateFormObject = (previousFormObj: FormData | null) => {
   if (previousFormObj != null) {
      return {
         name: previousFormObj.name,
         email: previousFormObj.email,
         phoneNumber: previousFormObj.phoneNumber,
         message: previousFormObj.message,
         addressLine1: previousFormObj.addressLine1,
         addressLine2: previousFormObj.addressLine2,
         cityTown: previousFormObj.cityTown,
         stateCounty: previousFormObj.stateCounty,
         postcode: previousFormObj.postcode,
         country: previousFormObj.country,
      };
   }
   return {
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
   };
};

export const GetValidationObject = (
   errors: { FieldName: string; MessageCode: string }[]
): FormData => {
   const validation = CreateFormObject(null);
   errors.forEach((err) => {
      if (err.FieldName === "FullName") {
         validation.name = err.MessageCode;
      } else if (err.FieldName === "EmailAddress") {
         validation.email = err.MessageCode;
      } else if (err.FieldName === "Message") {
         validation.message = err.MessageCode;
      } else if (err.FieldName === "AddressDetails.AddressLine1") {
         validation.addressLine1 = err.MessageCode;
      } else if (err.FieldName === "AddressDetails.CityTown") {
         validation.cityTown = err.MessageCode;
      } else if (err.FieldName === "AddressDetails.StateCounty") {
         validation.stateCounty = err.MessageCode;
      } else if (err.FieldName === "AddressDetails.Postcode") {
         validation.postcode = err.MessageCode;
      } else if (err.FieldName === "AddressDetails.Country") {
         validation.country = err.MessageCode;
      }
   });
   return validation;
};
