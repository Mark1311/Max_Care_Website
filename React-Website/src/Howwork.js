import React, { useState } from "react";
import workapi from "./API_Data/ApiWork";

const Howwork = () => {
  const [workdata, setWorkData] = useState(workapi);

  return (
    <>
      <section>
        <div className="work-container container">

          <h1 className="Main-heading text-center">We are Specialist in this...</h1>
          <div className="row">
            {workdata.map((curEle) => {
              const { id, logo, title, info } = curEle;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i class={`fontawsome-style ${logo}`}></i>
                    <h3 className="sub-heading">{title} </h3>
                    <p className=" main-para mapa w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Howwork;
