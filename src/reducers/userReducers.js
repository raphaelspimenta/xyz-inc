import {
  SET_TO_DONE,
  GET_PEOPLE,
  MOVE_TO_TRASH,
  SET_TO_ALL,
  GET_PROFILE
} from "../actions/index";

export function userReducers(state = { all: [], done: [], trash: [] }, action) {
  switch (action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        all: [...action.payload],
        done: [],
        trash: []
      };
    case GET_PROFILE:
      return {
        ...state,
        myprofile: action.payload[0].picture
      };

    case SET_TO_ALL:
      var array_all = state.all.concat(action.id);

      var array_done = state.done.filter(function(el) {
        return el.login.username !== action.id.login.username;
      });

      var array_trash = state.trash.filter(function(el) {
        return el.login.username !== action.id.login.username;
      });

      return {
        ...state,
        all: array_all,
        done: array_done,
        trash: array_trash
      };

    case SET_TO_DONE:
      var array_done = state.done.concat(action.id);

      var array_all = state.all.filter(function(el) {
        return el.login.username !== action.id.login.username;
      });

      var array_trash = state.trash.filter(function(el) {
        return el.login.username !== action.id.login.username;
      });

      return {
        ...state,
        all: array_all,
        done: array_done,
        trash: array_trash
      };

    case MOVE_TO_TRASH:
      var array_trash = state.trash.concat(action.id);

      var array_all = state.all.filter(function(el) {
        return el.login.username !== action.id.login.username;
      });

      var array_done = state.done.filter(function(el) {
        return el.login.username !== action.id.login.username;
      });

      return {
        ...state,
        all: array_all,
        done: array_done,
        trash: array_trash
      };

    default:
      return state;
  }
}
