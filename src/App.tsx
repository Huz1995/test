import React from "react";
import Home from "./pages/Home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs/contactUs";
import AboutUs from "./pages/AboutUs/aboutUs";
import Footer from "./components/footer/footer";
import Toolbar from "./components/toolbar/toolbar";

function App() {
   return (
      <Router>
         <Toolbar></Toolbar>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
         </Routes>
         <Footer></Footer>
      </Router>
   );
}

export default App;
