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
  
    </>
  );
}
