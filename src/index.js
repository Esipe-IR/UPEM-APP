import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";

import persistState from "redux-localstorage";

import RootReducer from "./redux/RootReducer";
import RootSaga from "./redux/RootSaga";

import BigCalendar from "react-big-calendar";
import moment from "moment";

import App from "./app/App";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const history = createHistory();
const routerM = routerMiddleware(history);
const sagaM = createSagaMiddleware();

const enhancer = compose(
  persistState(null, {
    key: "upem-tools",
    serialize: sub => {
      return JSON.stringify({
        app: sub.app,
        calendar: {
          view: sub.calendar.view,
          week: sub.calendar.week,
          focused: sub.calendar.focused,
          modal: sub.calendar.modal,
          events: sub.calendar.events,
          resources: sub.calendar.resources
        }
      });
    },
    deserialize: serial => {
      return JSON.parse(serial);
    }
  })
);

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(routerM), applyMiddleware(sagaM)),
  enhancer
);

sagaM.run(RootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);
