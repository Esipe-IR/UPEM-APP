import { fork } from "redux-saga/effects";
import AppSaga from "../app/redux/saga";
import CRSaga from "../calendar/CResources/redux/saga";
import CESaga from "../calendar/CEvents/redux/saga";

function* RootSaga() {
  yield fork(AppSaga);
  yield fork(CRSaga);
  yield fork(CESaga);
}

export default RootSaga;
