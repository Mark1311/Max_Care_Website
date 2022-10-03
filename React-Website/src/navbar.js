import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {

     const [show, setShow] = useState(false);

  return (

     <section  class="Navbar-bg">
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container ">
        <a className="navbar-brand" href="#">
          <i className="fas fa-hospital"> Max_Care</i>
          
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={ () => setShow(!show )}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class={`collapse navbar-collapse ${show ? "show" : "" }`}>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Service">
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
            </li>
            

          </ul>
          <form className="d-flex">

          <button class="btn  btn-style " type="submit">
             Sing_in
            </button>
            
            <button class="btn  btn-style" type="submit">
            Sing_Up
            </button>
          </form>
        </div>
      </div>
    </nav>
    </section>
  );
};

export default Navbar;
