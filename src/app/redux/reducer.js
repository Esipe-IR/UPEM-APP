import { RCV_TOKEN, RCV_USER, RCV_TOGGLE_NAV } from './actions'

const initialState = {
  token: null,
  user: null,
  toggleNav: false
}

const newState = (state, action, x) => Object.assign({}, state, {[x]: action.payload})

const reducer = {
  [RCV_TOKEN]: (state, action) => newState(state, action, "token"),
  [RCV_USER]: (state, action) => newState(state, action, "user"),
  [RCV_TOGGLE_NAV]: (state, action) => newState(state, action, "toggleNav")
}

const AppReducer = (state = initialState, action) => {
  return reducer[action.type] ? reducer[action.type](state, action) : state
}

export default AppReducer
