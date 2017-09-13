import { takeLatest, select, call, put } from "redux-saga/effects";
import { ASK_RESOURCES, ASK_SEARCH, rcvResources, rcvMatches } from "./actions";
import { fetchResources } from "../../../services/fetch";

function* askResources(action) {
  const project = yield select(({ app }) => app.project);
  const resources = yield call(fetchResources, {
    projectId: project
  });

  yield put(rcvResources(resources));
  yield put(rcvMatches(resources));
}

function* askSearch(action) {
  const resources = yield select(
    ({ calendar_resources }) => calendar_resources.resources
  );

  const matches = resources.filter(
    e => e.name.toUpperCase().indexOf(action.payload.toUpperCase()) === 0
  );

  yield put(rcvMatches(matches));
}

function* CRSaga() {
  yield takeLatest(ASK_RESOURCES, askResources);
  yield takeLatest(ASK_SEARCH, askSearch);
}

export default CRSaga;
