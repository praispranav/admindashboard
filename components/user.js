import React from "react";

export default function User(props) {
  const ImgText = props.name.split(' ').map((item)=> item.slice(0,1))
  return (
    <>
      <div className="px-3">
        <div className="row py-3 m-0 border-bottom">
          <div className="col-2">
            <div
              className="rounded-circle icon-bg d-flex justify-content-between align-items-center pt-2"
              style={{ width: "40px", height: "40px", flexDirection:"column", flex:1 }}
            > <h6 className="m-0 p-0 text-white">
              {
                props.img === undefined ? ImgText : null
              }
              </h6></div>
          </div>
          <div className="col-7">
            <p className="m-0 p-0">
              <small className="text-grey-dark">
                <b>{props.name}</b>
              </small>
              <small className="extra-small"> {props.text}.</small>
            </p>

            <p className="extra-small-small mt-1 p-0 m-0">
             {props.time1}
            </p>
          </div>
          <div className="col-3 text-end">
            <p className="m-0 p-0">
              <small className="extra-small">{props.time2}</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
