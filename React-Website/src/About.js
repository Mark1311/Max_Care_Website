import React, { useState } from "react";
import App_Api from "./API_Data/Appapi";
import App_Api2 from "./API_Data/App_Api2";

const About = () => {
  const [aboutdata, setAboutData] = useState(App_Api);
  const [data, setData] = useState(App_Api2);

  return (
    <>
      <section className="common-section our-services">

       {/*----------------------------1st PART OF ABOUT US -----------------------------------*/}

        <div className="container mb-5">
          <div className="row text-center">
            <div className="col- 12 col-lg-6 text-centrer">
              <img
                src="./img/About01.svg"
                alt="thisimg"
                className="our-service-leftside-img"
              />
            </div>
  

            <div className="col-12 col-lg-6 our-services our-services-list">
              {/* <h3 className="mini-title">
                dvhje09cnyewgfavbuifjnvusdh80fofoiuef09qjkcvuwieh
              </h3> */}
              <h1 className="Main-heading" id="Main"> Our Doctors Specialisation</h1>
              {aboutdata.map((curEle) => {
                const { id, title, Info } = curEle;

                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number"></div>
                      <div className="col-10 our-services-data">
                        <h1> {title}</h1>
                        <p className="main-para">{Info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              ;
              <br />
              <button className=" btn btn-style btn-style-border button-1" id="btn-1">Know_More</button>
            </div>
          </div>
        </div>
        </section>

{/*----------------------------2nd PART OF ABOUT US -----------------------------------*/}

<section className="common-section our-services">
        <div className="container mb-5">
          <div className="row text-center">
          
            <div className="col-12 col-lg-6 our-services-rightside-content d-flex justify-content-center aling-items-start flex-column">
              {/* <h3 className="mini-title">
                dvhje09cnyewgfavbuifjnvusdh80fofoiuef09qjkcvuwieh
              </h3> */}
              <h1 className="main-heading Main-2">  Our Hospital Facilities</h1>
              {data.map((curEle) => {
                const { id, title, Info } = curEle;

                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      {/* <div className="col-1 our-services-number"> {id} </div> */}
                      <div className="col-10 our-services-data  OSD-2">
                        <h1> {title}</h1>
                        <p className="main-para">{Info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              ;
              <br />
              <button className="btn btn-style btn-style-border button-2 " id="btn-2"> Know More</button>
            </div>
            <div className="col- 12 col-lg-6 text-centrer">
              <img
                src="./img/About02.svg"
                alt="thisimg"
                className="our-service-leftside-img"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
