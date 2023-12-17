import { useState, useEffect } from "react";
import { Paper, Tab, Tabs } from "@mui/material";
import ReactPropTypes from "prop-types";
import dayValues from "./data.jsx";
import styling from "./event.module.css";
import eventContent from "./eventdesc";


const Mdl = (props) => {
  return (
    props.mdlstate && (
      <div className="fixed bg-gray top-0 left-0 w-full h-full flex items-center justify-center z-50">
        <div className="bg-gray-800 rounded-lg p-12 text-white w-content">
          <h1 className="text-2xl font-bold mb-4">
            {eventContent[props.event_id - 1].title}
          </h1>
          <p className="mb-4">{eventContent[props.event_id - 1].date}</p>
          <ul className="mb-4 list-disc pl-6">
            <li>{eventContent[props.event_id - 1].event_info}</li>
            <li>{eventContent[props.event_id - 1].time_span}</li>
            <li>{eventContent[props.event_id - 1].extra}</li>
          </ul>
          <p className="mb-4">{eventContent[props.event_id - 1].no_of_participants}</p>
          <div className="flex justify-around">
            <button
              onClick={props.close}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Back to event section
            </button>
            <button>
              Go to form
            </button>
          </div>
        </div>
      </div>
    )
  );
};

function DayDataLeft(props) {
  const[mdl, setmdl] = useState(false);
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
      <Mdl mdlstate={mdl} close={toggle_mdl} event_id={Number(props.num)}/>
        <p className={styling.content}>{props.context}</p>
        <button
          className={`${styling["infoLinkLeft"]} text-xs lg:text-base`}
          // href={props.info}
          onClick={toggle_mdl}
        >
          More Info
        </button>
      </div>
    </div>
  );
}

function DayDataRight(props) {
  const[mdl, setmdl] = useState(false);
  const toggle_mdl = () => {
    setmdl(!mdl);
  }
  return (
    <div className={styling.master2}>
      <div className={styling.bigBox}>
      <Mdl mdlstate={mdl} close={toggle_mdl} event_id={Number(props.num)}/>
        <p className={styling.content}>{props.context}</p>
        <button
          className={`${styling["infoLinkRight"]} text-xs lg:text-base`}
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
  const handleChange = (event, newValue) => {
    setActiveDay(newValue);
  };

  return (
    <div className={`${styling["main"]}`}>
      <h1
        className={`${styling["eventHeading"]} text-4xl md:text-6xl lg:text-8xl my-5 font-extrabold py-4`}
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
                width: ["6.5rem", "10rem"],
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
      <div className={styling.allContent}>
        <div className={styling.master}>
          <DayDataLeft
            num="1"
            context={dayValues[activeDay].block1}
            info={dayValues[activeDay].infoBlock1}
          />
          <DayDataRight
            num="2"
            context={dayValues[activeDay].block2}
            info={dayValues[activeDay].infoBlock2}
          />
        </div>
        <div className={styling.master}>
          <DayDataLeft
            num="3"
            context={dayValues[activeDay].block1}
            info={dayValues[activeDay].infoBlock1}
          />
          <DayDataRight
            num="4"
            context={dayValues[activeDay].block2}
            info={dayValues[activeDay].infoBlock2}
          />
        </div>
        <div className={styling.master}>
          <DayDataLeft
            num="5"
            context={dayValues[activeDay].block1}
            info={dayValues[activeDay].infoBlock1}
          />
          <DayDataRight
            num="6"
            context={dayValues[activeDay].block2}
            info={dayValues[activeDay].infoBlock2}
          />
        </div>
        <div className={styling.master}>
          <DayDataLeft
            num="7"
            context={dayValues[activeDay].block1}
            info={dayValues[activeDay].infoBlock1}
          />
          <DayDataRight
            num="8"
            context={dayValues[activeDay].block2}
            info={dayValues[activeDay].infoBlock2}
          />
        </div>
      </div>
    </div>
  );
}

export default Event;
