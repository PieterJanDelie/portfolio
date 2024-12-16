import React from "react";  
import "./Timeline.css";

const Timeline = ({ events }) => {
  return (
    <div className="timeline-container">
      <h1 className="timeline-title">Mijn Geschiedenis</h1>
      <div className="timeline">
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-event ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <h2>{event.year}</h2>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
