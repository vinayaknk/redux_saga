import { IMAGES, STATS } from '../constants';

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

const loadImageStats = id => ({
    type: STATS.STATS_LOAD,
    id,
});

const setImageStats = (id, downloads) => ({
    type: STATS.STATS_LOAD_SUCCESS,
    id,
    downloads,
});

const setImageStatsError = id => ({
    type: STATS.IMAGES_LOAD_FAIL,
    id,
});

export {
    loadImages,
    setImages,
    setError,
    loadImageStats,
    setImageStats,
    setImageStatsError,
};
