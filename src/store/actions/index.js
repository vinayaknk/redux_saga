import { IMAGES } from '../constants';

const loadImages = images => ({
    type: IMAGES.IMAGES_LOAD,
    images,
});

const setImages = images => ({
    type: IMAGES.IMAGES_LOAD_SUCCESS,
    images,
});

const setError = error => ({
    type: IMAGES.IMAGES_LOAD_FAIL,
    error,
});

export { loadImages, setImages, setError };
