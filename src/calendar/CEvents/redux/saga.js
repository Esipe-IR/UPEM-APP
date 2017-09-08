import { takeLatest, select, call, put } from "redux-saga/effects";
import { ASK_EVENTS, addEvents } from "./actions";
import { fetchEvents } from "../../../services/fetch";

function* CE_Saga() {
  yield takeLatest(ASK_EVENTS, function*(action) {
    const { project, week } = yield select(({ app, calendar_events }) => ({
      project: app.project,
      week: calendar_events.week
    }));

    const events = yield call(fetchEvents, {
      projectId: project,
      resources: action.payload.resources,
      startDate: action.payload.startDate.format("MM/DD/YYYY"),
      endDate: action.payload.endDate.format("MM/DD/YYYY")
    });

    yield put(addEvents({ [week]: events }));
  });
}

export default CE_Saga;
