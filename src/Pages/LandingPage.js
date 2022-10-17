import React from "react";
import NavBar from "../Component/NavBar";
import { BiLocationPlus } from "react-icons/bi";

const LandingPage = ({ data }) => {
  return (
    <>
      <NavBar />
      <div className="main-container">
        {data.map((item) => (
          <div className="card">
            <div className="card-1">
              <div key={item.id}>
                <img src={item.image} alt="" />
              </div>
              <div className="card-2">
                <div className="card-3">
                  <BiLocationPlus
                    style={{
                      width: 20,
                      height: 20,
                      marginTop: 40,
                      color: "red"
                    }}
                  />
                  <p>{item.location}</p>
                </div>
                <h2>{item.title} </h2>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LandingPage;
