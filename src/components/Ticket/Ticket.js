import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";

import "./Ticket.style.scss";

// ticket component for hot tickets section
const Ticket = props => {
  return (
    <div
      id={props.id}
      layout={props.layout}
      className={props.layout === "grid" ? "grid-view" : "list-view"}
    >
      <a className="" href={props.address}>
        <img src={props.imgSrc} alt={props.author} />
      </a>
      <div className="bottomRow">
        <h4>{props.author}</h4>
        <div className="heightContainer">
          <p>
            <span className="iconTicket">
              <FontAwesomeIcon icon={faClipboard} />
            </span>
            Height: <span>{props.height}</span>
          </p>
        </div>
        <div className="widthContaienr">
          <p>
            <span className="iconTicket">
              <FontAwesomeIcon icon={faArrowsAltH} />
            </span>
            Width: <span>{props.width}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
