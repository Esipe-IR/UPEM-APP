import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { AppReducer, AppState } from "../app/redux/reducer";
import { CRReducer, CRState } from "../calendar/CResources/redux/reducer";
import { CEReducer, CEState } from "../calendar/CEvents/redux/reducer";

const CreateReducer = (reducer, initialState) => {
  return (state = initialState, action) => {
    return reducer[action.type] ? reducer[action.type](state, action) : state;
  };
};

const RootReducer = combineReducers({
  app: CreateReducer(AppReducer, AppState),
  calendar_resources: CreateReducer(CRReducer, CRState),
  calendar_events: CreateReducer(CEReducer, CEState),
  routing: routerReducer
});

export default RootReducer;
