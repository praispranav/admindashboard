import React from "react";

export default function ContentNav(props) {
  return (
    <>
      <div className="p-3 px-4 m-0 row align-items-center justify-content-between">
        <div className=" col-4">
          <div className="d-flex">
            <div className=" icon-bg rounded p-1 px-2 ">
              <h4 onClick={()=> props.toogleNav()} className="m-0 p-0">
                <i className="bi bi-list text-white"></i>
              </h4>
            </div>

            <div className="">
              <input
                type="text"
                className="form-control border-0 bg-content mx-2"
                placeholder="Search For Something..."
              />
            </div>
          </div>
        </div>

        <div className="col-6 p-2 text-grey">
          <div className="d-flex">
            <p className="p-0 m-0">Welcome to INSPINIA+ Admin Theme.</p>

            <div className="mx-3 d-none d-sm-block">
              <h5 className="p-0 m-0">
                <i className="bi bi-envelope"></i>
              </h5>
            </div>
            <div className="mx-2 d-none d-sm-block">
              <h5 className="p-0 m-0">
                <i className="bi bi-bell"></i>
              </h5>
            </div>
            <div className="mx-3 d-none d-sm-block">
              <p className="p-0 m-0">Log Out</p>
            </div>
            <div className="mx-2">
              <h5 className="p-0 m-0 d-none d-sm-block">
                <i className="bi bi-menu-button-wide"></i>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
