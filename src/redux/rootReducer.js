import {
  FETCH_EVENTS,
  CHANGE_ORDER,
  SEARCH_HANDLER,
  GRID_CHANGE,
  LIST_CHANGE
} from "./action.types";

const initialState = {
  fromApi: [],
  normalSort: true,
  changedSort: false,
  search: "",
  grid: true,
  list: true
};

const apiDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        fromApi: [...action.event]
      };
    case CHANGE_ORDER:
      return {
        ...state,
        normalSort: false,
        changedSort: !state.changedSort
      };
    case SEARCH_HANDLER: {
      return {
        ...state,
        search: action.e
      };
    }
    case GRID_CHANGE: {
      return {
        ...state,
        grid: !state.grid
      };
    }
    case LIST_CHANGE: {
      return {
        ...state,
        list: !state.list
      };
    }
    default:
      return state;
  }
};

export default apiDataReducer;
