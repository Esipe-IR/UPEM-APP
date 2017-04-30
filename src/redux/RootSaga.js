import { fork } from 'redux-saga/effects'
import appSaga from './app/saga'
import calendarSaga from './calendar/saga'

function* RootSaga() {
  yield fork(appSaga)
  yield fork(calendarSaga)
}

export default RootSaga
