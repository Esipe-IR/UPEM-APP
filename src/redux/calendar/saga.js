import { takeLatest, put, call } from 'redux-saga/effects'
import {
  ASK_DAY_EVENTS,
  ASK_WEEK_EVENTS,
  ASK_RESOURCES,
  receiveDayEvents,
  receiveWeekEvents,
  receiveResources
} from './actions'
import { fetchEvents, fetchResources } from '../../services/fetch'
import { getFormatedEvents } from '../../services/format'

function* askResources(action) {
  let resources = yield call(fetchResources)

  if (resources) resources = resources.calendar.resources

  yield put(receiveResources(resources))
}

function* calendarSaga() {
  yield takeLatest(ASK_DAY_EVENTS, function* (action) {
    let events = yield call(fetchEvents, action.payload)
    if (events) events = events.calendar.events

    yield put(receiveDayEvents(events))
  })
  yield takeLatest(ASK_WEEK_EVENTS, function* (action) {
    let events = yield call(fetchEvents, action.payload)
    events = getFormatedEvents(events, action.payload)

    yield put(receiveWeekEvents(events))
  })
  yield takeLatest(ASK_RESOURCES, askResources)
}

export default calendarSaga
