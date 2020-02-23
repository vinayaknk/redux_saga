import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducers from './errorReducers';
import pageReducer from './pageReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducers,
    nextPage: pageReducer,
});

export default rootReducer;
