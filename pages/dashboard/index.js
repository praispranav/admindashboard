import React,{ useState } from "react";
import SideNav from "../../components/nav";
import ContentNav from "../../components/contentnav";
import Appointments from "../../components/appointments";
import ChartSection1 from "../../components/charttopsection";
import Progress from "../../components/progress";
import Comments from "../../components/comments";
import Card from "../../components/card";
import User from "../../components/user";

const userlist = [
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

function SettingButton() {
  return (
    <>
      <a>
        <div className="position-fixed icon-bg px-3 py-2 text-white border-custom">
          <h4 className="m-0 p-0 rotate">
            <i class="bi bi-gear"></i>
          </h4>
        </div>
      </a>
    </>
  );
}
export default function AdminDashboard() {
    const [ toogle, settoogle ] = useState(true)
  return (
    <div>
      <SettingButton />
      <div className="row m-0 p-0">
        <div className={`col-2 bg-nav p-0 m-0 d-none ${toogle ? "d-sm-block" : ""}`}>
          <SideNav />
        </div>
        <div className={`col-12 col-sm-12 bg-content p-0 ${toogle? "col-md-10": "col-md-12"}`}>
          <ContentNav toogleNav={()=> settoogle(!toogle)} />

          {/* SECTION1 */}
          <div className="bg-white p-4 border">
            <div className="row m-0">
              <h6 className="display-6 text-grey">Welcome</h6>
              <div className="col-12 col-sm-3">
                <p>
                  <small>You have 42 messages and 6 notifications</small>
                </p>
                {/* date start here */}
                <div className="mt-4">
                  {appoint.map((item, index) => (
                    <div className="mt-3">
                      <Appointments
                        key={index}
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
                margin={false}
                text={
                  <>
                    {"New Data For Report"}
                    <span className="m-0 p-1 mx-2 px-2 icon-bg rounded text-white extra-small">
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
                    <p className="extra-small p-0 m-0 mt-1">$ 456, 323</p>
                  </div>
                </div>
              </Card>

              <Card margin={true} text="Read below comments">
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
              <Card margin={false} text="Alpha Projects">
                <div className="">
                  <div className="bg-light p-4">
                    <h5>You have meeting today! </h5>
                    <p className="extra-small">
                      Meeting is on 6:00am. Check your schedule to see detail.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
