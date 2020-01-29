import React from "react";
import "./EventTicket.style.scss";
import Button from "../Button/Button";

// Component for ticket in upcoming events section
const EventTicket = props => {
  return (
    <div id={props.id} className="eventTicketContainerList">
      <div className="imgDatesSection">
        <div className="imgEventContainer">
          <img src={props.imgSrc} alt={props.alt} />
        </div>
        <div className="eventTextSection">
          <div className="dateFirst">
            <p>February</p>
            <span className="dayInMonth">14</span>
          </div>
          <div className="moreDetails">
            <p className="hourlyTime">Time 20:30</p>
            <h4>{props.author}</h4>
            <p className="dimensions">
              <span>Width: {props.height},</span>{" "}
              <span>Height: {props.width}</span>
            </p>
          </div>
        </div>
      </div>
      <Button
        addClassName="changeGridButton"
        link={props.address}
        name="Find Pics"
      />
    </div>
  );
};

export default EventTicket;
