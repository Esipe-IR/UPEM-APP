import {
  RCV_VIEW,
  RCV_DAY,
  RCV_WEEK,
  RCV_FOCUSED,
  RCV_EVENTS,
  RCV_MODAL,
  RCV_RESOURCE,
  ADD_EVENTS
} from "./actions";
import { newState, addState } from "../../../services/utils";
import { getToday } from "../../../services/date";

export const CEState = {
  view: "day",
  day: getToday(),
  week: 0,
  focused: false,
  events: {},
  modal: false,
  resource: {}
};

export const CEReducer = {
  [RCV_VIEW]: (state, action) => newState(state, action, "view"),
  [RCV_DAY]: (state, action) => newState(state, action, "day"),
  [RCV_WEEK]: (state, action) => newState(state, action, "week"),
  [RCV_FOCUSED]: (state, action) => newState(state, action, "focused"),
  [RCV_EVENTS]: (state, action) => newState(state, action, "events"),
  [RCV_MODAL]: (state, action) => newState(state, action, "modal"),
  [RCV_RESOURCE]: (state, action) => newState(state, action, "resource"),
  [ADD_EVENTS]: (state, action) => addState(state, action, "events")
};
