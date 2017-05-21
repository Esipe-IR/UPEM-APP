import {
  RCV_VIEW,
  RCV_DAY,
  RCV_WEEK,
  RCV_FOCUSED,
  RCV_EVENTS,
  RCV_RESOURCES,
  RCV_SEARCH,
  RCV_MODAL,
  ADD_EVENTS
} from './actions'

const initialState = {
  view: "day",
  day: null,
  week: 0,
  focused: false,
  events: {},
  resources: [],
  modal: false
}

const newState = (state, action, x) => Object.assign({}, state, {[x]: action.payload})
const addState = (state, action, x) => {
  let o = Object.assign({}, state[x], {})
  let keys = Object.keys(action.payload)

  keys.forEach(k => {
    o[k] = action.payload[k]
  })

  return Object.assign({}, state, {[x]: o})
}

const reducer = {
  [RCV_VIEW]: (state, action) => newState(state, action, "view"),
  [RCV_DAY]: (state, action) => newState(state, action, "day"),
  [RCV_WEEK]: (state, action) => newState(state, action, "week"),
  [RCV_FOCUSED]: (state, action) => newState(state, action, "focused"),
  [RCV_EVENTS]: (state, action) => newState(state, action, "events"),  
  [RCV_RESOURCES]: (state, action) => newState(state, action, "resources"),
  [RCV_SEARCH]: (state, action) => newState(state, action, "search"),
  [RCV_MODAL]: (state, action) => newState(state, action, "modal"),
  [ADD_EVENTS]: (state, action) => addState(state, action, "events")
}

const CalendarReducer = (state = initialState, action) => {
  return reducer[action.type] ? reducer[action.type](state, action) : state
}

export default CalendarReducer
