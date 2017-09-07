import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import AppReducer from "../app/redux/reducer";
import CalendarReducer from "../calendar/redux/reducer";

const RootReducer = combineReducers({
  app: AppReducer,
  calendar: CalendarReducer,
  routing: routerReducer
});

export default RootReducer;
