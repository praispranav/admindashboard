import React, { useState } from "react";
import SideNav from "../../components/nav";
import ContentNav from "../../components/contentnav";
import Appointments from "../../components/appointments";
import ChartSection1 from "../../components/charttopsection";
import Progress from "../../components/progress";
import Comments from "../../components/comments";
import Card from "../../components/card";
import User from "../../components/user";
import Image from "next/image";

const userlist = [
  {
    name: "Pranav Kumar",
    text: "Some ltext Here for. lorem ipsum",
    time2: "10 min ago",
    time1: " Today 05:45 pm - 24/12/2020",
  },
  {
    name: "Ram Kumar",
    text: "Some ltext Here for. lorem ipsum",
    time2: "10 min ago",
    time1: " Today 05:45 pm - 24/12/2020",
  },
  {
    name: "Mohan Kumar",
    text: "Some ltext Here for. lorem ipsum",
    time2: "10 min ago",
    time1: " Today 05:45 pm - 24/12/2020",
  },
  {
    name: "Pranav Kumar",
    text: "Some ltext Here for. lorem ipsum",
    time2: "10 min ago",
    time1: " Today 05:45 pm - 24/12/2020",
  },
  {
    name: "Pranav Kumar",
    text: "Some ltext Here for. lorem ipsum",
    time2: "10 min ago",
    time1: " Today 05:45 pm - 24/12/2020",
  },
  {
    name: "Pranav Kumar",
    text: "Some ltext Here for. lorem ipsum",
    time2: "10 min ago",
    time1: " Today 05:45 pm - 24/12/2020",
  },
];

const CommentsData = [
  {
    time: "2min ago",
    text: "I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    user: "Pranav Kumar",
  },
  {
    time: "2min ago",
    text: "I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    user: "Pranav Kumar",
  },
  {
    time: "2min ago",
    text: "I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    user: "Pranav Kumar",
  },
  {
    time: "2min ago",
    text: "I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    user: "Pranav Kumar",
  },
  {
    time: "2min ago",
    text: "I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    user: "Pranav Kumar",
  },
  {
    time: "2min ago",
    text: "I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    user: "Pranav Kumar",
  },
];

const appoint = [
  { text: "Please", time: "09:45 pm" },
  { text: "Please", time: "09:45 pm" },
  { text: "Please", time: "09:45 pm" },
  { text: "Please", time: "09:45 pm" },
];

const dropdownmenu = [
  { link: "#", text: "Action" },
  { link: "#", text: "Action" },
  { link: "#", text: "Action" },
  { link: "#", text: "Action" },
];
function SettingButton() {
  return (
    <>
      <a>
        <div className="position-fixed icon-bg px-3 py-2 text-white border-custom">
          <h4 className="m-0 p-0 rotate">
            <i className="bi bi-gear"></i>
          </h4>
        </div>
      </a>
    </>
  );
}

// mobile-sidebar display-true ${toogle ? " " : "transition-sidenav display-false"}
export default function AdminDashboard() {
  const [toogle, settoogle] = useState(true);
  return (
    <div id="scrolltotop">
      <SettingButton />
      <div className="row m-0 p-0">
        <a
          className=" shadow position-fixed pt-2 px-2 m-0 p-0 icon-bg rounded"
          style={{
            bottom: "50px",
            right: "50px",
            width: "65px",
            height: "40px",
          }}
          href="#scrolltotop"
        > <p className="p-0 m-0 text-white">Top <i class="bi bi-arrow-up"></i></p>
        </a>
        <div
          className={` bg-nav p-0 m-0 col-12 col-sm-2 mobile-sidebar ${
            toogle ? "display-true" : "display-false transition-sidenav "
          }  `}
        >
          <div
            onClick={() => settoogle(!toogle)}
            className={`position-fixed d-sm-none d-block ${
              toogle ? "" : "d-none"
            } `}
            style={{ width: "30px", top: "50px", right: "50px" }}
          >
            <Image src="/close.png" width="30px" height="30px" />
          </div>
          <SideNav />
        </div>
        <div
          className={`col-12 col-sm-12 bg-content p-0 ${
            toogle ? "col-md-10" : "transition-content"
          }`}
        >
          <ContentNav toogleNav={() => settoogle(!toogle)} />

          {/* SECTION1 */}
          <div className="bg-white p-4 border">
            <div className="row m-0">
              <h6 className="text-grey">Welcome</h6>
              <div className="col-12 col-sm-3">
                <p>
                  <small>You have 42 messages and 6 notifications</small>
                </p>
                {/* date start here */}
                <div className="mt-4">
                  {appoint.map((item, index) => (
                    <div className="mt-3" key={item.text}>
                      <Appointments
                        text={item.text}
                        order={index + 1}
                        time={item.time}
                      />
                    </div>
                  ))}
                </div>

                {/* date end here */}
              </div>
              <div className="col-12 col-sm-6">
                <ChartSection1 />
              </div>
              <div className="col-12 col-sm-3">
                <Progress />
              </div>
            </div>
          </div>

          <div className="row m-0 p-0">
            <div className="col-12 col-sm-4 p-4">
              <Card
                dropdown={dropdownmenu}
                margin={false}
                setting={dropdownmenu}
                text={
                  <>
                    {"New Data For Report"}
                    <span className="m-0 p-1 mx-1 px-2 icon-bg rounded text-white extra-small-small">
                      IN+
                    </span>
                  </>
                }
              >
                <div className=" d-flex justify-content-between p-4">
                  <div>
                    <h6 className="m-0 p-0 text-grey-dark">
                      NYS report new data!
                    </h6>
                    <a className="extra-small">Check the store price</a>
                  </div>

                  <div className="">
                    <h6 className="p-0 m-0 bg-dark text-white">Chart</h6>
                    <p className="extra-small p-0 m-0 mt-1">
                      <b>$ 456, 323</b>
                    </p>
                  </div>
                </div>
              </Card>

              <Card
                dropdown={dropdownmenu}
                setting={dropdownmenu}
                margin={true}
                text="Read below comments"
              >
                <div>
                  {CommentsData.map((item, index) => (
                    <Comments
                      key={index}
                      text={item.text}
                      user={item.user}
                      time={item.time}
                    />
                  ))}
                </div>
              </Card>
            </div>

            <div className="col-12 col-sm-4 p-custom">
              <div className="w-100 border bg-white  text-grey-dark">
                <div
                  className="p-2 p-3 px-4 d-flex justify-content-between my-1 "
                  style={{ borderBottom: "1px solid lightgrey" }}
                >
                  <h6 className="p-0 m-0">Your Daily Feed</h6>
                  <div className="bg-warning px-2 extra-small text-white rounded">
                    {" "}
                    10 Message
                  </div>
                </div>
                <div>
                  {/* user list start here */}

                  {userlist.map((item, index) => (
                    <User
                      key={index}
                      text={item.text}
                      name={item.name}
                      time1={item.time1}
                      time2={item.time2}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 p-4">
              <Card
                dropdown={dropdownmenu}
                setting={dropdownmenu}
                margin={false}
                text="Alpha Projects"
              >
                <div className="">
                  <div className="bg-light p-4">
                    <h6>You have meeting today! </h6>
                    <p className="extra-small">
                      Meeting is on 6:00am. Check your schedule to see detail.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
                    <div className="bg-white px-3 py-2 w-100">
                      Footer
                    </div>
          </div>
        </div>
      </div>
    </div>
  );
}
