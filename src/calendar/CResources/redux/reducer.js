import {
  RCV_RESOURCES,
  RCV_MATCHES,
  RCV_MAX_ITEMS
} from "./actions";
import { newState } from "../../../services/utils";

export const CRState = {
  resources: [],
  matches: [],
  maxItems: 15
};

export const CRReducer = {
  [RCV_RESOURCES]: (state, action) => newState(state, action, "resources"),
  [RCV_MATCHES]: (state, action) => newState(state, action, "matches"),
  [RCV_MAX_ITEMS]: (state, action) => newState(state, action, "maxItems")
};
