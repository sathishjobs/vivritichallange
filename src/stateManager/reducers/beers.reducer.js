import * as types from "../types";

const initialState = {
  // All Beer infos goes here
  data : [],
  // Explored data goes here (search , sort, filter)
  filteredData : [],
  // Error goes here
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BEERS:
      return {
        ...state,
        data: action.data
      };

    case types.SEARCH_BY_NAME : 
      return {
        ...state,
        filteredData : action.data
      }

    case types.SORT_BY_ABV: 
      return {
        ...state,
        filteredData : action.data
      }

    case types.FILTER_BY_STYLE:
      return {
        ...state,
        filteredData : action.data
      }

    default:
      return state;
  }
};
