import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6  col-lg-4">
                  <h2>Company Add.</h2>
                  <div class = "address">

                  <h3>Plot No. 1385</h3> <br/>
                  <h3>Opp. Shri Ram Mandir</h3> <br/>
                  <h3>Greather Noida, Sector - 125</h3> <br/>
                  <h3>Uttar Pradash, India</h3> <br/>
                  </div>
                                    
                </div>

                {/* <div className="col-6  col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      
                      <a href="#">About</a>
                    </li>
                    <li>
                      
                      <a href="#">About</a>
                    </li>
                    <li>
                      
                      <a href="#">About</a>
                    </li>
                    <li>
                      
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div> */}

                <div className="col-6  col-lg-4">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      
                      <a href="#"><h3 class= "serv">General Surgical</h3></a>
                    </li>
                    <li>
                      
                      <a href="#"><h3 class= "serv" >Laboratory Test</h3></a>
                    </li>
                    <li>
                      
                      <a href="#"><h3 class= "serv" >Emergenct Room</h3></a>
                    </li>
                    <li>
                      
                      <a href="#"><h3 class= "serv" >X-ray Services</h3></a>
                    </li>
                  </ul>
                </div>

                <div className="col-6  col-lg-4">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <a href="">
                        <i className="fab fa-instagram fontawsome-style "></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="">
                        <i className="fab fa-facebook fontawsome-style "></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="">
                        <i className="fab fa-telegram fontawsome-style "></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="">
                        <i className="fab fa-twitter fontawsome-style "></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              <div className="mt-5">
               <p className="main-para text-center w-100 ">  Copyright @ Mark VaranVal  </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
