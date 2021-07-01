import React from "react";

export default function Comments(props) {
  return (
    <>
      <div className="p-3 border-bottom">
        <p>
          <a href={props.link} className="text-green">@{props.user}</a><small>{props.text}</small>
        </p>
        <p className="extra-small p-0 m-0">
          {" "}
          <i className="bi bi-clock"></i> {props.time}
        </p>
      </div>
  
    </>
  );
}
