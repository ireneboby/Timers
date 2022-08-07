// Import the SELECT_TIMER action
import { SELECT_TIMER } from '../actions';

const selectedTimerReducer = (state = null, action) => {
    switch (action.type) {
        case SELECT_TIMER:
            state = action.payload.index;
            break;
        default:
            return state;
        
    }
}

export default selectedTimerReducer;