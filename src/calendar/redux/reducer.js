import {
  RCV_VIEW,
  RCV_DAY,
  RCV_WEEK,
  RCV_FOCUSED,
  RCV_EVENTS,
  RCV_RESOURCES,
  RCV_SEARCH,
  RCV_MODAL
} from './actions'

const initialState = {
  view: "day",
  day: null,
  week: 0,
  focused: false,
  events: [],
  resources: [],
  modal: false
}

const newState = (state, action, x) => Object.assign({}, state, {[x]: action.payload})

const reducer = {
  [RCV_VIEW]: (state, action) => newState(state, action, "view"),
  [RCV_DAY]: (state, action) => newState(state, action, "day"),
  [RCV_WEEK]: (state, action) => newState(state, action, "week"),
  [RCV_FOCUSED]: (state, action) => newState(state, action, "focused"),
  [RCV_EVENTS]: (state, action) => newState(state, action, "events"),  
  [RCV_RESOURCES]: (state, action) => newState(state, action, "resources"),
  [RCV_SEARCH]: (state, action) => newState(state, action, "search"),
  [RCV_MODAL]: (state, action) => newState(state, action, "modal")
}

const CalendarReducer = (state = initialState, action) => {
  return reducer[action.type] ? reducer[action.type](state, action) : state
}

export default CalendarReducer
