import { takeEvery, call, put } from 'redux-saga/effects';

//actions dispached --> listned by watcher saga --> worker saga

//worker saga

function* workerSaga() {
    console.log('hey from worker saga');
    console.log(put({ type: 'ACTION_FROM_WORKER' }));
    yield put({ type: 'ACTION_FROM_WORKER' });
}

//watcher saga
function* rootSaga() {
    console.log('hey from watcher saga');
    yield takeEvery('HELLO', workerSaga);
}

export default rootSaga;
