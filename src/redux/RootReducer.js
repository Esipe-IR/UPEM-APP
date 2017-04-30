import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import AppReducer from './app/reducer'
import CalendarReducer from './calendar/reducer'

const RootReducer =  combineReducers({
  app: AppReducer,
  calendar: CalendarReducer,
  routing: routerReducer
})

export default RootReducer
