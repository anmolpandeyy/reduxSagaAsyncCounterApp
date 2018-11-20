import { takeEvery, put } from "redux-saga/effects";
import { delay } from "redux-saga";

function* counterUpAsync() {
  yield delay(4000);
  yield put({ type: "INCREASE_COUNTER_ASYNC" });
}

function* counterDownAsync() {
  yield delay(4000);
  yield put({ type: "DECREASE_COUNTER_ASYNC" });
}

export function* watchCounterUp() {
  yield takeEvery("INCREASE_COUNTER", counterUpAsync);
}

export function* watchCounterDown() {
  yield takeEvery("DECREASE_COUNTER", counterDownAsync);
}
