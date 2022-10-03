import React, { useState } from "react";
import ServiceApi from "./API_Data/ServiceApi";

const Service = () =>{

     const [servicedata, setServiceData] = useState(ServiceApi);

     return(
          <>
          <section className="service-main-container">
          <div className="container service-container">
          <h1 className="main-heading text-center fw-bold" >Our Other Services..!!</h1>
          
          <div className="row">

          {servicedata.map((curEle0) =>{
               const {id , logo, title, info} = curEle0;
               return(<>

                    <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" key = {id}>
                    <i className={`fontawsome-style ${logo}`}> </i>
                    <h2 className="sub-heading">{title}</h2>
                    <p  className="main-para mapa"> {info}</p>
               </div>
               </>)
          })}


              
          </div>
          
          </div>
          </section>
          </>
     )
}

export default Service;