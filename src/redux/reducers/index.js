import {combineReducers} from 'redux';

import imageFetchReducer from './imageFetchReducer';

export default combineReducers({
    image : imageFetchReducer
});