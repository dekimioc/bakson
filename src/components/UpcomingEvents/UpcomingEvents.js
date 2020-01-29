import React, { Component } from "react";

import Title from "../Title/Title";
import Button from "../Button/Button";

import "./UpcomingEvents.style.scss";
import { connect } from "react-redux";
import { listChange } from "../../redux/actions";

class UpcomingEvents extends Component {
  changeStyle = () => {
    this.props.onListChange();
  };
  render() {
    const header = "Upcoming Events";
    return (
      <div className="upcomingEventsContainer">
        <Title title={header} />
        <Button
          addClassName="changeGridButton"
          onClick={this.changeStyle}
          name="Switch Grid"
        />
        <div
          className={
            this.props.list
              ? "upcomingEventsImagesList"
              : "upcomingEventsImagesGrid"
          }
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onListChange: () => dispatch(listChange())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingEvents);
