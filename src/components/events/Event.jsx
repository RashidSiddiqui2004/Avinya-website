import { useState } from "react";
import { Paper, Tab, Tabs } from "@mui/material";
import ReactPropTypes from "prop-types";
import dayValues from "./data.jsx";
import styling from "./event.module.css";
import styling2 from "./modal.module.css";
import eventContent from "./eventdesc";


const Mdl = (props) => {

  const [form, setForm] = useState(false);

  return (
    props.mdlstate && (
      <div className="fixed top-0 left-0 w-[100vw] h-full flex items-center justify-center z-50">
        {form ?
          <div className={styling2.parent_div}>

            <h1 className={styling2.head2}>{eventContent[props.day - 1][props.event_id - 1].title} </h1>

            <button className={styling2.btn3} onClick={() => setForm(false)}>X</button>

            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc9CEOW_LkEuon4mwjrnvyoXj-CxXpn25GHKxcIeIh4JB80Zg/viewform?embedded=true"
              className="w-full h-[440px] overflow-y-hidden overflow-hidden"
              frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

          </div>
          :
          <div className={styling2.parent_div}>

            <div className={styling2.gradient_div}>
              <h1 className={styling2.head}>{eventContent[props.day - 1][props.event_id - 1].title} </h1>
              <p className={styling2.info}>
                {eventContent[props.day - 1][props.event_id - 1].event_info}
                <div style={{ width: "fit-content", margin: "2% 1% 1% 1%" }}> Time : {eventContent[props.day - 1][props.event_id - 1].time_span}
                </div><div style={{ width: "fit-content", margin: "1%" }}> Date : {eventContent[props.day - 1][props.event_id - 1].date} </div>
                <div style={{ width: "fit-content", margin: "1%" }}>No of participants registered : {eventContent[props.day - 1][props.event_id - 1].no_of_participants} </div>
              </p>
              <button className={styling2.btn2} onClick={() => setForm(true)}>
                Registration opening soon.....!
              </button>
            </div>
            <button className={styling2.btn1} onClick={props.close}>X</button>
          </div>
        }

      </div>

    )
  );
};

function DayDataLeft(props) {
  const [mdl, setmdl] = useState(false);
  const toggle_mdl = () => {
    setmdl(!mdl);
  }
  return (
    <div className={styling.master1}>
      <div className={styling.smallBox}>
        <div className={styling.triangleLeft}></div>
        <h1 className={styling.num}>{props.num}</h1>
      </div>
      <div className={styling.bigBox}>
        <Mdl mdlstate={mdl} close={toggle_mdl} event_id={Number(props.num)} day={props.day} />
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

function DayDataRight(props) {
  const [mdl, setmdl] = useState(false);
  const toggle_mdl = () => {
    setmdl(!mdl);
  }
  return (
    <div className={styling.master2}>
      <div className={styling.bigBox}>
        <Mdl mdlstate={mdl} close={toggle_mdl} event_id={Number(props.num)} day={props.day} />
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

function Event() {
  const [activeDay, setActiveDay] = useState(1);

  const numberofEvents = [3, 4, 5, 4];

  const handleChange = (event, newValue) => {
    setActiveDay(newValue);
  };

  const divArray = Array.from({ length: numberofEvents[activeDay - 1]/2}, (_, index) => index + 1);


  return (
    <div className={`${styling["main"]}`} id="events">
      <h1
        className={`${styling["eventHeading"]} text-4xl md:text-6xl font-[drummer] lg:text-8xl my-5 font-extrabold py-4`}
      >
        EVENTS
      </h1>
      <div className="flex flex-col text-center items-center justify-center mb-5">
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
            <div key={index + 1} className={styling.master}>
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
          )
        })}

        {
          numberofEvents[activeDay - 1] % 2 != 0 ?
            <>
              <DayDataLeft
                num={numberofEvents[activeDay - 1]}
                context={dayValues[activeDay].headings[numberofEvents[activeDay - 1]-1]}
                // info={dayValues[activeDay].infoBlock1}
                day={activeDay}
              />
            </>
            :
            ""
        }

      </div>


      <div className={styling.allContent}>

        {/* <div className={styling.master}>
          <DayDataLeft
            num="1"
            context={dayValues[activeDay].block1}
            info={dayValues[activeDay].infoBlock1}
            day={activeDay}
          />
          <DayDataRight
            num="2"
            context={dayValues[activeDay].block2}
            info={dayValues[activeDay].infoBlock2}
            day={activeDay}
          />
        </div> */}

        {/* <div className={styling.master}>
          <DayDataLeft
            num="3"
            context={dayValues[activeDay].block1}
            info={dayValues[activeDay].infoBlock1}
            day={activeDay}
          />
          <DayDataRight
            num="4"
            context={dayValues[activeDay].block2}
            info={dayValues[activeDay].infoBlock2}
            day={activeDay}
          />
        </div> */}

        {/* <div className={styling.master}>
          <DayDataLeft
            num="5"
            context={dayValues[activeDay].block1}
            info={dayValues[activeDay].infoBlock1}
            day={activeDay}
          />
          <DayDataRight
            num="6"
            context={dayValues[activeDay].block2}
            info={dayValues[activeDay].infoBlock2}
            day={activeDay}
          />
        </div> */}
        {/* <div className={styling.master}>
          <DayDataLeft
            num="7"
            context={dayValues[activeDay].block1}
            info={dayValues[activeDay].infoBlock1}
            day={activeDay}
          />
          <DayDataRight
            num="8"
            context={dayValues[activeDay].block2}
            info={dayValues[activeDay].infoBlock2}
            day={activeDay}
          />
        </div> */}

      </div>
    </div>
  );
}

export default Event;
