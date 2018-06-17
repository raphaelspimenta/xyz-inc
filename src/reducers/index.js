import { combineReducers } from "redux";
import { userReducers } from "./userReducers";
import { filters } from "./gridFilter";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  people: userReducers,
  filters,
  visibilityFilter
});
