import React from 'react'

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
                <h2 className="m-0 p-0" id="panelsStayOpen-headingOne">
                  <button
                    className="py-2 custom-btn bg-nav text-light-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                      <div className="d-flex align-items-center">
                      <i className="bi bi-bank mx-3 extra-small"></i>
                    <p className='normal-text p-0 m-0'>Dashboard</p>
                      </div>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="nav-border m-0">
                    <button className="padding-34em py-2 custom-btn bg-nav text-light-black">Dashboard 1</button>
                    <button className="padding-34em py-2 custom-btn bg-nav text-light-black">Dashboard 1</button>
                    <button className="padding-34em py-2 custom-btn bg-nav text-light-black">Dashboard 1</button>
                    <button className="padding-34em py-2 custom-btn bg-nav text-light-black">Dashboard 1</button>
                    <button className="padding-34em py-2 custom-btn bg-nav text-light-black">Dashboard 1</button>
                  </div>
                </div>
              </div>
              {/* Accordin 2 */}
              <div className="">
                <h2 className="p-0 m-0" id="panelsStayOpen-headingThree">
                  <button
                    className=" py-2 custom-btn bg-nav text-light-black collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                      <div className="d-flex align-items-center">
                      {/* <i class="bi bi-bank mx-3 extra-small"></i> */}
                      <i className="bi bi-bar-chart mx-3 extra-small"></i>
                    <p className='normal-text p-0 m-0'>Another Icon</p>
                      </div>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                   <div className="nav-border m-0">
                    <button className="padding-34em py-2 custom-btn bg-nav text-light-black">Dashboard 1</button>
                    <button className="padding-34em py-2 custom-btn bg-nav text-light-black">Dashboard 1</button>
                    <button className="padding-34em py-2 custom-btn bg-nav text-light-black">Dashboard 1</button>
                    <button className="padding-34em py-2 custom-btn bg-nav text-light-black">Dashboard 1</button>
                    <button className="padding-34em py-2 custom-btn bg-nav text-light-black">Dashboard 1</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
