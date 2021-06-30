import React from "react";

export default function ChartSection1() {
  return (
    <>
      <div className="p-2 px-3 rounded bg-light">
        <h6 className="display-6">Chart Here</h6>
      </div>

      <div className="d-flex text-grey mt-4 justify-content-evenly">
        <div>
          <h5 className="m-0 p-0">
            <b>$ 406,100</b>
          </h5>
          <p>
            <small>Sales marketing report</small>
          </p>
        </div>
        <div>
          <h5 className="m-0 p-0">
            <b>$ 406,100</b>
          </h5>
          <p>
            <small>Annual sales revenue</small>
          </p>
        </div>
        <div>
          <h5 className="m-0 p-0">
            <b>$ 406,100</b>
          </h5>
          <p>
            <small>Half-year revenue margin</small>
          </p>
        </div>
      </div>
    </>
  );
}
