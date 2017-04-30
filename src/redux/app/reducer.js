import { RCV_TOKEN, RCV_USER } from './actions'

const initialState = {
  token: null,
  user: null
}

const reducer = {
  [RCV_TOKEN]: (state, action) => Object.assign({}, state, {token: action.payload}),
  [RCV_USER]: (state, action) => Object.assign({}, state, {user: action.payload})
}

const AppReducer = (state = initialState, action) => {
  return reducer[action.type] ? reducer[action.type](state, action) : state
}

export default AppReducer
