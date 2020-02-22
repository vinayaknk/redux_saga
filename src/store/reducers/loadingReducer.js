import { IMAGES } from '../constants';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case IMAGES.IMAGES_LOAD:
            return true;
        case IMAGES.IMAGES_LOAD_SUCCESS:
            return false;
        case IMAGES.IMAGES_LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

export default loadingReducer;
