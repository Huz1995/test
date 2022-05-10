import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import Spacer from "../spacer";
import "./toolbar.scss";

function Toolbar() {
   return (
      <div className="toolbar">
         <div className="toolbarContent">
            <Link to="/">
               <img className="logo" src={logo} alt="Logo" />
            </Link>
            <Spacer></Spacer>
            <div className="buttonContainer">
               <Link to="/">
                  <button className="toolbarButton">HOME</button>
               </Link>
               <Link to="/about-us">
                  <button className="toolbarButton">ABOUT US</button>
               </Link>
               <Link to="/contact-us">
                  <button className="toolbarButton">CONTACT US</button>
               </Link>
               <button className="toolbarButton auth">Log In</button>
            </div>
         </div>
      </div>
   );
}

export default Toolbar;
