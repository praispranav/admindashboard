import React from "react";

export default function Card(props) {
    const classtext = "w-100 border bg-white  text-grey-dark"
    const classtext2 = "w-100 border bg-white  text-grey-dark mt-4"
  return (
    <>
      <div className={props.margin === true ? classtext2 : classtext}>
        <div
          className="p-2 p-3 px-4 d-flex justify-content-between"
          style={{ borderBottom: "1px solid lightgrey" }}
        >
          <h6 className="p-0 m-0">{props.text}</h6>
          <div>
            <i className="bi bi-chevron-compact-up text-grey-dark mx-1"></i>
            <i className="bi bi-gear text-grey-dark"></i>
            <i className="bi bi-x text-grey-dark mx-1"></i>
          </div>
        </div>
        { props.children }
      </div>
    </>
  );
}
