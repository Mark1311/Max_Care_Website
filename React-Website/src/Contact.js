import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    addresh: "",
    message: "",
  });

  let name, value;

  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  //Connect with firebase database

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, addresh, message } = userData;

    if (firstName && lastName && phone && email && addresh && message) {
      const res = await fetch(
        "https://maxcareweb-99a0f-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            addresh,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          addresh: "",
          message: "",
        });
        alert("data Stored");
      } else {
        alert("plzz fill the valid data");
      }
    }  else {
      alert("plzz fill the valid data");
    }
  };

  return (
    <>
      <section className="container-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold head pb-5">
                       Join Our Family...!!!   
                  </h1>
                  {/* <p className="main-para"> v bsdhpocbdhvweovjdk jkdvuigf</p> */}
                  <figure>
                    <img
                      src="./img/Contact.svg"
                      alt="nmc hf"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/*Right Side Part Start */}

                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First_Name"
                          name="firstName"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last_Name"
                          name="lastName"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone_Number"
                          name="phone"
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email_I'd"
                          name="email"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control contact-input-feild"
                          placeholder="Home_Address"
                          name="addresh"
                          value={userData.addresh}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          placeholder="Add_Your_Message"
                          name="message"
                          value={userData.message}
                          onChange={postUserData}
                          className="form-control contact-input-feild"
                        />
                      </div>
                    </div>

                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" className="main-para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis!
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
