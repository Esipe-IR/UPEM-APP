import { fork } from 'redux-saga/effects'
import appSaga from '../app/redux/saga'
import calendarSaga from '../calendar/redux/saga'

function* RootSaga() {
  yield fork(appSaga)
  yield fork(calendarSaga)
}

export default RootSaga
