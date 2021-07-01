import React from "react";

export default function Appointments(props) {
  return (
    <>
      <div
        className="row p-0 m-0 align-items-center text-grey"
        style={{ borderBottom: "1px solid lightgrey" }}
      >
        <div className="col-9 p-0">
          <div className="d-flex align-items-center ">
            <div className="icon-bg rounded px-2 text-white h-100">
              <p className="m-0 p-0">{props.order}</p>
            </div>
            <div className="mx-3">
              <p className="m-0 p-0">
                <small>{props.text}</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 text-end p-0">
          <p className="m-0 p-0 mb-2">
            <small>{props.time}</small>
          </p>
        </div>
      </div>
    </>
  );
}
