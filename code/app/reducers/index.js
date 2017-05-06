import { combineReducers } from 'redux';
import startUp from './startUp';
import homeMenus from './home';
import time from './time';
import photo from './photo';
import message from './message';
import anniversary from './anniversary';

const Reducers = combineReducers({
    startUp,
    homeMenus,
    time,
    photo,
    message,
    anniversary
})

export default Reducers
