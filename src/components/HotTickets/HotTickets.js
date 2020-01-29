import React, { Component } from "react";
import "./HotTickets.style.scss";

import Button from "../Button/Button";
import Title from "../Title/Title";
import { connect } from "react-redux";
import { gridChange } from "../../redux/actions";

class HotTickets extends Component {
  changeStyle = () => {
    this.props.onGridChange();
  };

  render() {
    return (
      <div className={this.props.grid ? "hotTicketsContainer" : "list"}>
        <Title title={this.props.header} />
        <Button
          onClick={this.changeStyle}
          addClassName="changeGridButton"
          name="Switch Grid"
        />
        <Button
          onClick={this.props.clicked}
          addClassName="bigSmallToggle"
          name="Big First/ Small First"
        />
        <div
          className={
            this.props.grid ? "hotTicketsImagesGrid" : "hotTicketsImagesList"
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
    grid: state.grid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGridChange: () => dispatch(gridChange())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotTickets);
