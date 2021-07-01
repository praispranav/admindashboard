import React from "react";

export default function ContentNav(props) {
  return (
    <>
      <div className="p-3 px-4 m-0 row align-items-center justify-content-between">
        <div className=" col-4">
          <div className="col-12 col-sm-5 d-flex align-items-center">
            <div className=" icon-bg rounded h-100 px-2 ">
              <h4 onClick={() => props.toogleNav()} className="m-0 p-0">
                <i className="bi bi-list text-white"></i>
              </h4>
            </div>

            <div className="">
              <input
                type="text"
                className="border-0 bg-content mx-2 search-input"
                placeholder="Search For Something..."
              />
            </div>
          </div>
        </div>

        <div className="col-7 d-none d-sm-block p-2 text-grey">
          <div className="d-flex justify-content-between">
            <p className="p-0 m-0">Welcome to INSPINIA+ Admin Theme.</p>

            <div className="mx-3 d-none d-sm-block">
              <h5 className="p-0 m-0">
                <div className="">
                  <button
                    className="text-grey"
                   
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-envelope"></i>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </h5>
            </div>
            <div className="mx-2 d-none d-sm-block">
              <h5 className="p-0 m-0">
                <div className="">
                  <button
                    className="text-grey"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-bell"></i>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </h5>
            </div>
            <div className="mx-3 d-none d-sm-block">
              <p className="p-0 m-0">Log Out</p>
            </div>
            <div className="mx-2">
              <h5 className="p-0 m-0 d-none d-sm-block">
                <div className="">
                  <button
                    className="text-grey"
                    type="button"
                    id="dropdownMenuButton3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-menu-button-wide"></i>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton3"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
