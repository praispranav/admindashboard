import React from "react";

export default function Comments(props) {
  return (
    <>
      <div className="p-3 border-bottom">
        <p>
          <a className="text-green">@{props.user}</a>{props.text}
        </p>
        <p className="extra-small p-0 m-0">
          {" "}
          <i className="bi bi-clock"></i> {props.time}
        </p>
      </div>
      {/* <div className="p-3 border-bottom">
        <p>
          <a className="text-green">@Alan Marry</a> I belive that. Lorem Ipsum
          is simply dummy text of the printing and typesetting industry.
        </p>
        <p className="extra-small p-0 m-0">
          {" "}
          <i className="bi bi-clock"></i> 1 minutes ago
        </p>
      </div>
      <div className="p-3 border-bottom">
        <p>
          <a className="text-green">@Alan Marry</a> I belive that. Lorem Ipsum
          is simply dummy text of the printing and typesetting industry.
        </p>
        <p className="extra-small p-0 m-0">
          {" "}
          <i className="bi bi-clock"></i> 1 minutes ago
        </p>
      </div>
      <div className="p-3 border-bottom">
        <p>
          <a className="text-green">@Alan Marry</a> I belive that. Lorem Ipsum
          is simply dummy text of the printing and typesetting industry.
        </p>
        <p className="extra-small p-0 m-0">
          {" "}
          <i className="bi bi-clock"></i> 1 minutes ago
        </p>
      </div> */}
    </>
  );
}
