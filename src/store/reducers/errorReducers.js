import { IMAGES } from '../constants';

const errorReducers = (state = null, action) => {
    switch (action.type) {
        case IMAGES.IMAGES_LOAD_FAIL:
            return action.error;
        case IMAGES.IMAGES_LOAD:
        case IMAGES.IMAGES_LOAD_SUCCESS:
            return null;
        default:
            return state;
    }
};

export default errorReducers;
