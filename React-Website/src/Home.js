import React from "react";
import "./index.css";
import Navbar from "./navbar";
import Header from "./Header";
import Howwork from "./Howwork";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Howwork />
      <About />
      <Service />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
