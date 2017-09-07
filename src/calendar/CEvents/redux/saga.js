import { ASK_EVENTS } from "./actions";

function* CE_Saga() {
  yield takeLatest(ASK_EVENTS, function*(action) {
    const week = yield select(({ calendar }) => calendar.week);
    let events = yield call(fetchEvents, action.payload);

    if (events) events = { [week]: events };
    else events = { [week]: [] };

    yield put(addEvents(events));
  });
}

export default CE_Saga;
