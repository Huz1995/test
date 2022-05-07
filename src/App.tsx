import React from 'react';
import Toolbar from './components/toolbar/toolbar';
import Home from "./pages/home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ContactUs from './pages/contactUs';
import AboutUs from './pages/aboutUs';

function App() {
  return (
    <Router>
      <Toolbar></Toolbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<ContactUs/>} />
        <Route path="/contact-us" element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
