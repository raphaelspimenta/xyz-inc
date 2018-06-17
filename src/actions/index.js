export const SET_TO_DONE = "SET_TO_DONE";
export const MOVE_TO_TRASH = "MOVE_TO_TRASH";
export const SET_TO_ALL = "SET_TO_ALL";
export const GET_PEOPLE = "GET_PEOPLE";
export const GET_PROFILE = "GET_PROFILE";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const SET_TEXT_FILTER = "SET_TEXT_FILTER";
export const SET_ORDER_BY = "SET_ORDER_BY";

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const setToDone = id => ({
  type: SET_TO_DONE,
  id
});

export const moveToTrash = id => ({
  type: MOVE_TO_TRASH,
  id
});

export const setToAll = id => ({
  type: SET_TO_ALL,
  id
});

export const setText = text => ({
  type: SET_TEXT_FILTER,
  text
});

export const setOrderBy = orderBy => ({
  type: SET_ORDER_BY,
  orderBy
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_TRASH: "SHOW_TRASH"
};
