import React from "react";

export default function Progress() {
  return (
    <>
      <div className="p-2 px-3 text-grey">
        <h6>Project Beta progress</h6>
        <p className="m-0 p-0">
          <small>

          You have two project with not compleated task.
          </small>
        </p>
        <div className="d-flex my-3 justify-content-evenly">
          <div className="bg-danger rounded-circle p-5"></div>
          <div className="bg-warning rounded-circle p-5"></div>
        </div>
        <p className="extra-small">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </>
  );
}
