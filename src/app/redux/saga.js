import { takeLatest, put, call, select } from "redux-saga/effects";
import { ASK_USER, ASK_PROJECT, rcvUser, rcvProject } from "./actions";
import { fetchUser, fetchProjects } from "../../services/fetch";

function* askUser(action) {
  const token = yield select(({ app }) => app.token);
  const user = yield call(fetchUser, token);

  yield put(rcvUser(user));
}

function* askProject(action) {
  const today = new Date();
  const month = today.getMonth();
  let year = today.getFullYear();

  if (month < 8) {
    year--;
  }

  const projects = yield call(fetchProjects);
  const project = projects.reduce((prev, curr) => {
    if (prev !== 0) return prev;
    const schoolY = curr.name.split("-");

    if (parseInt(schoolY[0], 10) === year) {
      return curr.id;
    }

    return prev;
  }, 0);

  console.log(project);
  yield put(rcvProject(project));
}

function* AppSaga() {
  yield takeLatest(ASK_USER, askUser);
  yield takeLatest(ASK_PROJECT, askProject);
}

export default AppSaga;
