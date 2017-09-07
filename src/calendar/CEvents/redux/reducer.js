import {
  RCV_VIEW,
  RCV_DAY,
  RCV_WEEK,
  RCV_FOCUSED,
  RCV_EVENTS,
  RCV_MODAL,
  ADD_EVENTS
} from "./actions";
import { newState, addState } from "../../../services/utils";

export const CEState = {
  view: "day",
  day: null,
  week: 0,
  focused: false,
  events: {},
  modal: false
};

export const CEReducer = {
  [RCV_VIEW]: (state, action) => newState(state, action, "view"),
  [RCV_DAY]: (state, action) => newState(state, action, "day"),
  [RCV_WEEK]: (state, action) => newState(state, action, "week"),
  [RCV_FOCUSED]: (state, action) => newState(state, action, "focused"),
  [RCV_EVENTS]: (state, action) => newState(state, action, "events"),
  [RCV_MODAL]: (state, action) => newState(state, action, "modal"),
  [ADD_EVENTS]: (state, action) => addState(state, action, "events")
};
