import React from "react";
import "./index.css";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Error from "./Pages/Error";


const App = () => {
  return (
    <>
    <Routes>
    <Route exact path="/" element = {<Home/>} />
    <Route path="/about" element = {<About/>} />
    <Route path="/contact" element = {<Contact/>}/>
    <Route path="/service" element = {<Service/>}/>
    <Route path="*" element = {<Error/>}/>
    
     </Routes>
    </>
  );
};

export default App;


