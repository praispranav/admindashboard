import React from "react";

export default function Card(props) {
  const classtext = "w-100 border bg-white  text-grey-dark";
  const classtext2 = "w-100 border bg-white  text-grey-dark mt-4";
  return (
    <>
      <div className={props.margin === true ? classtext2 : classtext}>
        <div
          className="p-3 px-4 row m-0 justify-content-between"
          style={{ borderBottom: "1px solid lightgrey" }}
        >
          <h6 className="p-0 m-0 col-7">{props.text}</h6>
          <div className="col-5 text-end d-flex justify-content-end p-0">
            <div className="">
              <a
                className="text-grey"
                type="button"
                id="dropdownMenuButton4"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-chevron-compact-up text-grey-dark mx-1"></i>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton4"
              >
                {props.dropdown.map((item) => (
                  <li>
                    <a className="dropdown-item" href={item.link}>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <a
                className="text-grey"
                type="button"
                id="dropdownMenuButton5"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-gear text-grey-dark"></i>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton5"
              >
                {props.dropdown.map((item) => (
                  <li>
                    <a className="dropdown-item" href={item.link}>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <i className="bi bi-x text-grey-dark mx-1"></i>
          </div>
        </div>
        {props.children}
      </div>
    </>
  );
}
