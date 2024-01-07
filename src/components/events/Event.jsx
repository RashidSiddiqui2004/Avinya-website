import { useState } from "react";
import { Paper, Tab, Tabs } from "@mui/material";
import ReactPropTypes from "prop-types";
import dayValues from "./data.jsx";
import styling from "./event.module.css";
import styling2 from "./modal.module.css";
import eventContent from "./eventdesc";

const Mdl = (props) => { 

  const registrationUrl = eventContent[props.day - 1][props.event_id - 1].registrationlink;

  return (
    props.mdlstate && (
      <div className="fixed top-0 left-0 w-[100vw] h-full flex items-center justify-center z-[150]">
      
          <div className={styling2.parent_div} 
      style={{backgroundImage : `url(${window.innerWidth > 430 ? eventContent[props.day - 1][props.event_id - 1].banner
              : eventContent[props.day - 1][props.event_id - 1].bannerphone})`,
              backgroundBlendMode : "darken",
              backgroundColor : `rgba(52, 52, 52, ${window.innerWidth > 430 ? 0 : 0.5})`}}>
            <div className={styling2.gradient_div}>
              <h1 className={styling2.head}>
                {eventContent[props.day - 1][props.event_id - 1].title}{" "}
              </h1>
              <p className={styling2.info}>
                {eventContent[props.day - 1][props.event_id - 1].event_info}
                <div style={{ width: "fit-content", margin: "2% 1% 1% 1%" }}>
                  {" "}
                  Time :{" "}
                  {eventContent[props.day - 1][props.event_id - 1].time_span}
                </div>
                <div style={{ width: "fit-content", margin: "1%" }}>
                  {" "}
                  Date : {
                    eventContent[props.day - 1][props.event_id - 1].date
                  }{" "}
                </div>
                <div style={{ width: "fit-content", margin: "1%" }}>
                  Venue :{" "}
                  {
                    eventContent[props.day - 1][props.event_id - 1]
                      .location
                  }{" "}
                </div>
              </p>
              <button className={styling2.btn2} onClick={() => { window.open(registrationUrl, '_blank')}}>
                Register Now
              </button>
            </div>
            <button className={styling2.btn1} onClick={props.close}>
              X
            </button>
          </div>
       
      </div>
    )
  );
};

function DayDataLeft(props) {
  const [mdl, setmdl] = useState(false);
  const toggle_mdl = () => {
    setmdl(!mdl);
  };
  return (
    <div className={styling.master1}>
      <div className={styling.smallBox}>
        <div className={styling.triangleLeft}></div>
        <h1 className={styling.num}>{props.num}</h1>
      </div>
      <div className={styling.bigBox}>
        <Mdl
          mdlstate={mdl}
          close={toggle_mdl}
          event_id={Number(props.num)}
          day={props.day}
        />
        <p className={styling.content}>{props.context}</p>
        <button
          className={`${styling["infoLinkLeft"]} text-xs lg:text-base rounded-none focus:outline-none`}
          onClick={toggle_mdl}
        >
          More Info
        </button>
      </div>
    </div>
  );
}

// function DayDatamiddle(props) {
//   const [mdl, setmdl] = useState(false);
//   const toggle_mdl = () => {
//     setmdl(!mdl);
//   };
//   return (
//     <div className={styling.master1}>
//       <div className={styling.smallBox}>
//         <div className={styling.triangleLeft}></div>
//         <h1 className={styling.num}>{props.num}</h1>
//       </div>
//       <div className={styling.bigBox2}>
//         <Mdl
//           mdlstate={mdl}
//           close={toggle_mdl}
//           event_id={Number(props.num)}
//           day={props.day}
//         />
//         <p className={styling.content}>{props.context}</p>
       
//           <button
//             className={`${styling["infoLinkLeft2"]} text-xs sm:text-small lg:text-base rounded-none focus:outline-none`}
//             onClick={toggle_mdl}
//           >
//             More Info
//           </button>
        
//       </div>
//       <div className={styling.smallBox}>
//         <div className={styling.triangleRight}></div>
//         <h1 className={styling.num}>{props.num}</h1>
//       </div>
//     </div>
//   );
// }

function DayDataRight(props) {
  const [mdl, setmdl] = useState(false);
  const toggle_mdl = () => {
    setmdl(!mdl);
  };
  return (
    <div className={styling.master2}>
      <div className={styling.bigBox}>
        <Mdl
          mdlstate={mdl}
          close={toggle_mdl}
          event_id={Number(props.num)}
          day={props.day}
        />
        <p className={styling.content}>{props.context}</p>
        <button
          className={`${styling["infoLinkRight"]} text-xs lg:text-base rounded-none focus:outline-none`}
          // href={props.info}
          onClick={toggle_mdl}
        >
          More Info
        </button>
      </div>
      <div className={styling.smallBox}>
        <div className={styling.triangleRight}></div>
        <h1 className={styling.num}>{props.num}</h1>
      </div>
    </div>
  );
}

DayDataLeft.propTypes = {
  num: ReactPropTypes.string,
  context: ReactPropTypes.string,
  info: ReactPropTypes.string,
};
DayDataRight.propTypes = {
  num: ReactPropTypes.string,
  context: ReactPropTypes.string,
  info: ReactPropTypes.string,
};
// DayDatamiddle.propTypes = {
//   num: ReactPropTypes.string,
//   context: ReactPropTypes.string,
//   info: ReactPropTypes.string,
// };

function Event() {
  const [activeDay, setActiveDay] = useState(1);

  const numberofEvents = [3, 3, 3, 1];

  const handleChange = (event, newValue) => {
    setActiveDay(newValue);
  };

  const divArray = Array.from(
    { length: numberofEvents[activeDay - 1] / 2 },
    (_, index) => index + 1
  );

  return (
    <div className={`${styling["main"]}`} id="events">
      <h1
        className={`${styling["eventHeading"]} text-4xl md:text-6xl font-[drummer] lg:text-8xl my-5 font-extrabold py-4`}
      >
        EVENTS
      </h1>
      <div className="flex flex-col  text-center items-center justify-center mb-5">
        <Paper square>
          <Tabs
            value={activeDay}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="Tabs"
            sx={{
              "& button": {
                backgroundColor: "black",
                color: "white",
                fontSize: ["1rem", "1.5rem"],
                width: ["5.5rem", "10rem"],
                fontFamily: "Montserrat",
                fontWeight: "bold",
                fontStyle: "normal",
              },
              "& button.Mui-selected": {
                color: "primary",
              },
            }}
          >
            <Tab label="Day 01" value={1} />
            <Tab label="Day 02" value={2} />
            <Tab label="Day 03" value={3} />
            <Tab label="Day 04" value={4} />
          </Tabs>
        </Paper>
      </div>
      <h1
        className={`${styling["dateValue"]} text-xl md:text-4xl lg:text-4xl my-2 lg:my-12`}
      >
        {dayValues[activeDay].date}
      </h1>

      <div>
        {divArray.map((value, index) => {
          return (
            <div className={`text-2xl ${styling.master}`} key={index + 1}>
              <>
                <DayDataLeft
                  num={(index + 1) * 2 - 1}
                  context={dayValues[activeDay].headings[index * 2]}
                  // info={dayValues[activeDay].infoBlock1}
                  day={activeDay}
                />

                <DayDataRight
                  num={(index + 1) * 2}
                  context={dayValues[activeDay].headings[2 * index + 1]}
                  // info={dayValues[activeDay].infoBlock1}
                  day={activeDay}
                />
              </>
            </div>
          );
        })}
        <div>
          {numberofEvents[activeDay - 1] % 2 !== 0 ? (
            <div className="master4">
              <>
                <DayDataLeft
                  num={numberofEvents[activeDay - 1]}
                  context={
                    dayValues[activeDay].headings[
                      numberofEvents[activeDay - 1] - 1
                    ]
                  }
                  day={activeDay}
                />
                {/* <div className={styling.smallBox}>
                  <div className={styling.triangleRight}></div>
                  <h1 className={styling.num}>
                    {numberofEvents[activeDay - 1]}
                  </h1>
                </div> */}
              </>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
 
    </div>
  );
}

export default Event;
