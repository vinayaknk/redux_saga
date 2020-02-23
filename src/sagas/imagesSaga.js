import { takeEvery, select, call, put } from 'redux-saga/effects';
import { IMAGES } from '../store/constants/index';
import { fetchImages } from '../api/index';
import { setImages, setError } from '../store/actions/index';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
    console.log('handleImagesLoad');
    try {
        const page = yield select(getPage);
        const imgages = yield call(fetchImages, page);
        yield put(setImages(imgages));
    } catch (error) {
        //dispatch error action here
        yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    console.log('watchImagesLoad');
    yield takeEvery(IMAGES.IMAGES_LOAD, handleImagesLoad);
}
