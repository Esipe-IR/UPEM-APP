import { RCV_TOKEN, RCV_USER, RCV_TOGGLE_NAV, RCV_PROJECT } from "./actions";
import { newState } from "../../services/utils";

export const AppState = {
  token: null,
  user: null,
  toggleNav: false
};

export const AppReducer = {
  [RCV_TOKEN]: (state, action) => newState(state, action, "token"),
  [RCV_USER]: (state, action) => newState(state, action, "user"),
  [RCV_TOGGLE_NAV]: (state, action) => newState(state, action, "toggleNav"),
  [RCV_PROJECT]: (state, action) => newState(state, action, "project")
};
