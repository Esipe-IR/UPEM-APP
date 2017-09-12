import {
  RCV_VIEW,
  RCV_DAY,
  RCV_WEEK,
  RCV_FOCUSED,
  RCV_MODAL,
  RCV_RESOURCE
} from "./actions";
import { newState } from "../../../services/utils";
import { getToday } from "../../../services/date";

export const CEState = {
  view: "day",
  day: getToday(),
  week: 0,
  focused: false,
  modal: false,
  resource: {}
};

export const CEReducer = {
  [RCV_VIEW]: (state, action) => newState(state, action, "view"),
  [RCV_DAY]: (state, action) => newState(state, action, "day"),
  [RCV_WEEK]: (state, action) => newState(state, action, "week"),
  [RCV_FOCUSED]: (state, action) => newState(state, action, "focused"),
  [RCV_MODAL]: (state, action) => newState(state, action, "modal"),
  [RCV_RESOURCE]: (state, action) => newState(state, action, "resource")
};
