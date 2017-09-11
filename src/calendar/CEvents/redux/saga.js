import { takeLatest, select, call, put } from "redux-saga/effects";
import { ASK_EVENTS, ASK_RESOURCE, addEvents, rcvResource } from "./actions";
import { fetchEvents, fetchResource } from "../../../services/fetch";

function* CE_Saga() {
  yield takeLatest(ASK_EVENTS, function*(action) {
    const { project, week } = yield select(({ app, calendar_events }) => ({
      project: app.project,
      week: calendar_events.week
    }));

    const events = yield call(fetchEvents, {
      projectId: project,
      resource: action.payload.resource,
      startDate: action.payload.startDate.format("MM/DD/YYYY"),
      endDate: action.payload.endDate.format("MM/DD/YYYY")
    });

    yield put(addEvents({ [week]: events }));
  });

  yield takeLatest(ASK_RESOURCE, function*(action) {
    const project = yield select(({ app }) => app.project);
    const resource = yield call(fetchResource, {
      projectId: project,
      id: action.payload.resource,
      startDate: action.payload.startDate.format("MM/DD/YYYY"),
      endDate: action.payload.endDate.format("MM/DD/YYYY")
    });

    yield put(rcvResource(resource));
  });
}

export default CE_Saga;
