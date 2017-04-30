import {
  RCV_VIEW,
  RCV_DAY,
  RCV_DAY_EVENTS,
  RCV_FOCUSED,
  RCV_WEEK,
  RCV_WEEK_EVENTS,
  RCV_RESOURCES
} from './actions'

const initialState = {
  view: null,
  day: 0,
  dayEvents: [],
  focused: false,
  week: 0,
  weekEvents: [],
  resources: []
}

const newState = (state, action, x) => Object.assign({}, state, {[x]: action.payload})

const reducer = {
  [RCV_VIEW]: (state, action) => newState(state, action, "view"),
  [RCV_DAY]: (state, action) => newState(state, action, "day"),
  [RCV_DAY_EVENTS]: (state, action) => newState(state, action, "dayEvents"),
  [RCV_FOCUSED]: (state, action) => newState(state, action, "focused"),
  [RCV_WEEK]: (state, action) => newState(state, action, "week"),
  [RCV_WEEK_EVENTS]: (state, action) => newState(state, action, "weekEvents"),  
  [RCV_RESOURCES]: (state, action) => newState(state, action, "resources")
}

const CalendarReducer = (state = initialState, action) => {
  return reducer[action.type] ? reducer[action.type](state, action) : state
}

export default CalendarReducer
