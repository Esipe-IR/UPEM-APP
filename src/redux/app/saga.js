import { takeLatest, put, call, select } from 'redux-saga/effects'
import { ASK_USER, receiveUser } from './actions'
import { fetchUser } from '../../services/fetch'

function* askUser(action) {
  const token = yield select(({app}) => app.token)
  const data = yield call(fetchUser, token)

  let user = null
  if (data) user = data.user

  yield put(receiveUser(user))
}

function* appSaga() {
  yield takeLatest(ASK_USER, askUser)
}

export default appSaga
