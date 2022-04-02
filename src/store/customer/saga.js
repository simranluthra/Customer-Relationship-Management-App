import { all, call, put, takeLatest } from 'redux-saga/effects';

import { setCustomer } from './reducer';
import { getCustomersFromStorage, saveCustomerInStorage, deleteCustomersFromStorage } from '../../utilities/async_storage';

function* getCustomersSaga() {
  try {
    const response = yield call(getCustomersFromStorage);
    yield put(setCustomer(response.data));
  } catch (error) {
    console.log(`Error: ${error}`);
    yield put(setCustomer([]));
  }
}

function* saveCustomerSaga(action) {
  try {
    const response = yield call(saveCustomerInStorage, action.payload);
    if (response.data) {
      yield put(setCustomer(response.data));
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

function* deleteCustomersSaga() {
  try {
    const response = yield call(deleteCustomersFromStorage);
    if (!response) throw new Error();
    yield put(setCustomer([]));
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

export function* watchCustomerRequests() {
  yield all([
    takeLatest('GET_CUSTOMERS', getCustomersSaga),
    takeLatest('SAVE_CUSTOMER', saveCustomerSaga),
    takeLatest('DELETE_CUSTOMERS', deleteCustomersSaga)
  ]);
}
