import { take, call, fork, put } from 'redux-saga/effects';
import { IMAGES } from '../store/constants';
import { fetchImageStats } from '../api/index';
import {
    loadImageStats,
    setImageStats,
    setImageStatsError,
} from '../store/actions/index';

function* handleStatsRequest(id) {
    console.log('fetching stats for id ', id);
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImageStats(id));
            const responce = yield call(fetchImageStats, id);
            yield put(setImageStats(id, responce.downloads.total));
            return true;
        } catch (error) {}
    }
    yield put(setImageStatsError(id));
}

export default function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.IMAGES_LOAD_SUCCESS);
        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id);
        }
    }
}
