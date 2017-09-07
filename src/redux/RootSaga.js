import { fork } from "redux-saga/effects";
import AppSaga from "../app/redux/saga";
import CRSaga from "../calendar/CResources/redux/saga";

function* RootSaga() {
  yield fork(AppSaga);
  yield fork(CRSaga);
}

export default RootSaga;
