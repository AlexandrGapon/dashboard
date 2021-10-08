import {all} from 'redux-saga/effects'
import { loadDashboardPage } from './loadApp'
import { sitesWatcher } from './sites'

export function* rootWatcher() {
    yield all([
        loadDashboardPage(),
        sitesWatcher()
    ])
}