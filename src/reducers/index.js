import { combineReducers } from 'redux';
import chat from './chat';
import flights from './flights';

export default combineReducers({
    chat,
    flights,
});
