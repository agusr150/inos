import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import data1Reducer from './reducers/data1Reducer'
import data2Reducer from './reducers/data2Reducer'
import data3Reducer from './reducers/data3Reducer'
import data4Reducer from './reducers/data4Reducer'

const reducer = combineReducers({
    data1Reducer, data2Reducer, data3Reducer, data4Reducer
})
const store = createStore(reducer, applyMiddleware(thunk))

export default store