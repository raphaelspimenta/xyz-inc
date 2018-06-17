import { SET_ORDER_BY, SET_TEXT_FILTER } from "../actions";

export const initialFiltersState = {
  text: "",
  itemsSearch: []
};

export const filters = (state = initialFiltersState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text,
        itemsSearch: state.itemsSearch.concat(action.text)
      };
    default:
      return state;
  }
};
