import { select, takeLatest, put, call } from 'redux-saga/effects'
import {
  ASK_EVENTS,
  ASK_RESOURCES,
  ASK_SEARCH,
  addEvents,
  rcvResources
} from './actions'
import { fetchEvents, fetchResources } from '../../services/fetch'

function* calendarSaga() {
  yield takeLatest(ASK_EVENTS, function* (action) {
    let { calendar } = yield select()
    let events = yield call(fetchEvents, action.payload)
    
    if (events) events = {[calendar.week]: events.events}
    if (!events) events = {[calendar.week]: []}

    yield put(addEvents(events))
  })

  yield takeLatest(ASK_RESOURCES, function* (action) {
    let resources = localStorage.getItem("ade_resources")

    if (!resources) {
      resources = yield call(fetchResources)
      if (resources) resources = resources.resources
      localStorage.setItem("ade_resources", JSON.stringify(resources))
    } else {
      resources = JSON.parse(resources)
    }

    yield put(rcvResources(resources))
  })

  yield takeLatest(ASK_SEARCH, function* (action) {
    let resources = localStorage.getItem("ade_resources")

    if (!resources) return

    let matches = []
    resources = JSON.parse(resources)
    
    resources.forEach(function(e) {
      if (e.name.toUpperCase().indexOf(action.payload.toUpperCase()) !== -1) matches.push(e)  
    })

    yield put(rcvResources(matches))
  })
}

export default calendarSaga
