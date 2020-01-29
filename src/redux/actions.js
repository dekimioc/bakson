import {
  FETCH_EVENTS,
  CHANGE_ORDER,
  SEARCH_HANDLER,
  GRID_CHANGE,
  LIST_CHANGE
} from "./action.types";
import axios from "axios";

export const setEvent = event => {
  return {
    type: FETCH_EVENTS,
    event: event
  };
};

export const fetchEvents = () => {
  return dispatch => {
    axios
      .get("https://picsum.photos/v2/list")
      .then(response => {
        dispatch(setEvent(response.data));
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };
};

export const changeOrder = trigger => {
  return {
    type: CHANGE_ORDER,
    trigger: trigger
  };
};

export const searchHandler = e => {
  return {
    type: SEARCH_HANDLER,
    e: e
  };
};

export const gridChange = change => {
  return {
    type: GRID_CHANGE,
    change: change
  };
};

export const listChange = changed => {
  return {
    type: LIST_CHANGE,
    changed: changed
  };
};
