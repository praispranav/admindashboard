import React from "react";

export default function SideNav() {
  return (
    <>
      <div className="m-4 text-light-black">
        {/* Replace below with image */}
        <div
          className="bg-white rounded-circle"
          style={{ width: "60px", height: "60px" }}
        ></div>
        {/* Names */}
        <div className="mt-3">
          <h6 className="text-light-white m-0 p-0">Name Name</h6>
          <p className="m-0 p-0">
            <small>Some Text Here</small>
          </p>
        </div>
      </div>
      <div className="mt-5 text-light-black">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="text-light-black">
            
              <button  id="panelsStayOpen-headingOne"
                className="py-2 accordion-button p-0 custom-btn bg-nav text-light-black"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <div className="d-flex align-items-center w-100">
                  <i className="bi bi-bank mx-2 extra-small"></i>
                  <p className="normal-text p-0 m-0"><small>Dashboard</small></p>
                </div>
              </button>
        
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="nav-border m-0 bg-nav-dark py-3 ">
                <button className="padding-34em py-2 custom-btn bg-nav-dark text-light-black">
                <small><b className="letter-spacing">Dashboard 1</b></small>
                </button>
                <button className="padding-34em py-2 custom-btn bg-nav-dark text-light-black">
                <small><b className="letter-spacing">Dashboard 1</b></small>
                </button>
                <button className="padding-34em py-2 custom-btn bg-nav-dark text-light-black">
                <small><b className="letter-spacing">Dashboard 1</b></small>
                </button>
                <button className="padding-34em py-2 custom-btn bg-nav-dark text-light-black">
                <small><b className="letter-spacing">Dashboard 1</b></small>
                </button>
                <button className="padding-34em py-2 custom-btn bg-nav-dark text-light-black">
                <small><b className="letter-spacing">Dashboard 1</b></small>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
