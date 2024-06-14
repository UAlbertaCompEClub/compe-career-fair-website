import React, { useEffect } from "react";
import blockStyle from "../Block";
import navLinker from "../pageState/observer/navLinker";
import "./scheduleBlock.css";
import "../Block.css";
import scheduleData from "./scheduleData.json";

var ScheduleBlock = React.forwardRef((props, ref) => {
  var id = "schedule-block";
  useEffect(() => {
    navLinker(ref.current, props.setBlock, id);
  }, []);

  return (
    <div style={blockStyle()} className="block" id={id} ref={ref}>
      <div className="stack">
        <h1 className="main-heading faded text-main">Schedule</h1>
        <div className="schedule-table">
          {scheduleData.map((daySchedule, index) => (
            <div key={index} className="day-schedule">
              <h2>{daySchedule.day}</h2>
              {daySchedule.events.map((event, idx) => (
                <div key={idx}>
                  <p className="time">{event.time}</p>
                  <p className="event">{event.event}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="registration-text">
          <h3>For companies, the registration dates are as follows:</h3>
          <h3>&emsp;{">"} Early-Bird Discounted Pricing Deadline: July 20th, 5 pm MDT</h3>
          <h3>&emsp;{">"} Final Deadline: September 30th, 5 pm MDT</h3>
          <h3 className="colored-text">
            Note, students do NOT need to register to attend Aether. However, we
            will create an optional eventbrite closer to the event so that we
            can collect resumes to share with any companies interested in them.
            This info will be shared on our{" "}
            <a
              href="https://discord.gg/Dgd4hXA4eP"
              target="_blank"
              rel="noopener noreferrer"
            >
              discord
            </a>{" "}
            - join if you haven't already!{" "}
          </h3>
        </div>
      </div>
    </div>
  );
});

export default ScheduleBlock;
