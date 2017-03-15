import { combineReducers } from 'redux'
import board from './board'

const makeRootReducer = () => combineReducers({
    board
});

export default makeRootReducer