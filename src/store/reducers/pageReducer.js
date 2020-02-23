import { IMAGES } from '../constants/index';

const pageReducer = (state = 1, action) => {
    switch (action.type) {
        case IMAGES.IMAGES_LOAD_SUCCESS:
            return state + 1;
        default:
            return state;
    }
};

export default pageReducer;
