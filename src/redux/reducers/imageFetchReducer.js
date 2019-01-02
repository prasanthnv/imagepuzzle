import { FETCH_IMAGE } from '../actions/types';


const initialState = {
    image: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_IMAGE:
            cons.log('Fetching image');
            return {
                ...state,
                image: action.payload
            }
            break;
        default:
            return state;

    }
}