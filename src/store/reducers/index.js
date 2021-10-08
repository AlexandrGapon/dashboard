import { combineReducers } from 'redux'
import { sitesReducer } from './sitesReducer'
import { testsReducer } from './testsReducer'


export const rootReducer = combineReducers({
    tests: testsReducer,
    sites: sitesReducer
})