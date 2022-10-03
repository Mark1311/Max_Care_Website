import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-container">
          <div className="row">
            {/*Left Side Div(Contenet) */}
            <div className="col-12 col-lg-6 header-left-side  d-flex justify-content-center flex-column aling-items-start order-lg-first    order-last ">
              <h1 className="display-2">
                You'll Love the Way <br /> We Care for You!!
              </h1>
              <p className="para">
                Fast, Friendly and Accurate care for you!!
              </p>
              {/* <h3>enter some contert</h3> */}
              <div className="input-group mt-3 ">
                <input
                  type="text"
                  placeholder="What do you want to know..!!"
                  className="rounded-pill w-75  w-lg-75 me-3 p- 2 form-control-text"
                />
                <div className="input-group-button">
                <div className="data-text">
                 Get it !!</div>
                 </div>
              </div>
             </div>

              {/* Right Div Start */}
              <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center aling-items-center main-img order-md-first order-sm-first main-section-image">
              <img
                src="./img/Home.png"
                alt=" logo"
                className="img-fluid"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
