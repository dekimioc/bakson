import React, { Component } from "react";
import "./App.style.scss";
import axios from "axios";
import { connect } from "react-redux";

import Ticket from "./components/Ticket/Ticket";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";
import HotTickets from "./components/HotTickets/HotTickets";
import EventTicket from "./components/EventTicket/EventTicket";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchEvents, changeOrder, searchHandler } from "./redux/actions";

class App extends Component {
  componentDidMount() {
    this.props.onFetchEvents();
  }

  //function for calculating dimensions of the image
  imageSize = (width, height) => {
    return width + height;
  };

  // Handler for sorting images in the DOM
  // Added to the button onClick trigger
  sortImagesInDomHandler = el => {
    if (!this.props.normalSort && this.props.changedSort) {
      return el.sort((a, b) => parseFloat(b.props.id) - parseFloat(a.props.id));
    } else if (!this.props.normalSort && !this.props.changedSort) {
      return el.sort((a, b) => parseFloat(a.props.id) - parseFloat(b.props.id));
    }
  };

  changeImagesSortHandler = () => {
    this.props.onChangeOrder();
  };

  render() {
    // variable for rendering six hot tickets
    const hotTicketsGrid = this.props.fromApi.slice(1, 7).map(el => {
      return (
        <Ticket
          id={this.imageSize(el.width, el.height)}
          key={el.id}
          layout={"grid"}
          imgSrc={el.download_url}
          author={el.author}
          height={el.width}
          width={el.height}
          address={el.url}
        />
      );
    });
    // filtering DOM elements
    const filteredHot = hotTicketsGrid.filter(name =>
      name.props.author.toLowerCase().includes(this.props.search.toLowerCase())
    );

    // variable for rendering three events tickets
    const upcomingEventsList = this.props.fromApi.slice(7, 10).map(el => {
      return (
        <EventTicket
          id={this.imageSize(el.width, el.height)}
          alt={el.author}
          key={el.id}
          imgSrc={el.download_url}
          author={el.author}
          height={el.width}
          width={el.height}
          address={el.url}
        />
      );
    });
    // filtering DOM elements
    const filteredUpcoming = upcomingEventsList.filter(name =>
      name.props.author.toLowerCase().includes(this.props.search.toLowerCase())
    );

    return (
      <div>
        <Header>
          <SearchBar changed={e => this.props.onSearchChange(e)} />
        </Header>
        <div className="mainContainer">
          <HotTickets
            clicked={this.changeImagesSortHandler}
            header="Hot Tickets"
          >
            {this.props.normalSort && !this.props.changedSort
              ? filteredHot
              : this.sortImagesInDomHandler(filteredHot)}
          </HotTickets>
          <UpcomingEvents clicked={this.changeImagesSortHandler}>
            {this.props.normalSort && !this.props.changedSort
              ? filteredUpcoming
              : this.sortImagesInDomHandler(filteredUpcoming)}
          </UpcomingEvents>
        </div>
        <Footer text="ticketmaster" link="/" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fromApi: state.fromApi,
    normalSort: state.normalSort,
    changedSort: state.changedSort,
    search: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchEvents: () => dispatch(fetchEvents()),
    onChangeOrder: () => dispatch(changeOrder()),
    onSearchChange: e => dispatch(searchHandler(e.target.value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App, axios);
