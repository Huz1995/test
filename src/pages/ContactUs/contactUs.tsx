import React from "react";
import "./contactUs.scss";
import diagram from "../../assets/Img_Contact.png";
import Form from "../../components/Form/form";

function ContactUs() {
   const description: string =
      "Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at vix.";

   return (
      <div className="contactUsContainer">
         <div className="contactUs">
            <Form title="Contact us" description={description}></Form>
            <div className="svgImg">
               <img src={diagram} alt="cuimg" />
            </div>
         </div>
      </div>
   );
}

export default ContactUs;
