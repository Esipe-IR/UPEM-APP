import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import RootReducer from './redux/RootReducer'
import RootSaga from './redux/RootSaga'

import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import App from './app/App'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

const history = createHistory()
const routerM = routerMiddleware(history)
const sagaM = createSagaMiddleware()

const store = createStore(RootReducer, composeWithDevTools(
  applyMiddleware(routerM),
  applyMiddleware(sagaM)
))

sagaM.run(RootSaga)

ReactDOM.render(
  <Provider store={store}>
      <App history={history} />
  </Provider>,
  document.getElementById('root')
)
