import { VisibilityFilters, SET_VISIBILITY_FILTER } from "../actions";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      if (action.filter === undefined) return state;
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
