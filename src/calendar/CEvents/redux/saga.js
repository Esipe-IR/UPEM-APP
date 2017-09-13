import { takeLatest, select, call, put } from "redux-saga/effects";
import { ASK_RESOURCE, rcvResource } from "./actions";
import { fetchResource } from "../../../services/fetch";

function* CE_Saga() {
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
