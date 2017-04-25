import { combineReducers } from 'redux'
import startUp from './startUp'
import home from './home'

const Reducers = combineReducers({
    startUp,
    home
})

export default Reducers
