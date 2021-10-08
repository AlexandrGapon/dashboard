import createSagaMiddleware from '@redux-saga/core'
import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './reducers'
import { rootWatcher } from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)