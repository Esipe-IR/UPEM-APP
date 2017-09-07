import { RCV_TOKEN, RCV_USER, RCV_TOGGLE_NAV, RCV_PROJECT } from "./actions";

const initialState = {
  token: null,
  user: null,
  toggleNav: false,
  project: 0
};

const newState = (state, action, x) =>
  Object.assign({}, state, { [x]: action.payload });

const reducer = {
  [RCV_TOKEN]: (state, action) => newState(state, action, "token"),
  [RCV_USER]: (state, action) => newState(state, action, "user"),
  [RCV_TOGGLE_NAV]: (state, action) => newState(state, action, "toggleNav"),
  [RCV_PROJECT]: (state, action) => newState(state, action, "project")
};

const AppReducer = (state = initialState, action) => {
  return reducer[action.type] ? reducer[action.type](state, action) : state;
};

export default AppReducer;
