import { all, fork } from 'redux-saga/effects';

import { watchCustomerRequests } from './customer/saga';

export function* watcherSaga() {
  yield all([fork(watchCustomerRequests)]);
}
