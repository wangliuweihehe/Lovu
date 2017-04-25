import { combineReducers } from 'redux'
import startUp from './startUp'
import homeMenus from './home'

const Reducers = combineReducers({
    startUp,
    homeMenus
})

export default Reducers
