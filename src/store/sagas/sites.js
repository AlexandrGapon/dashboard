import { takeEvery, put, call, all } from 'redux-saga/effects'
import { localHostAPI } from '../../API/localHostAPI'
import { SET_SITES, SITE_LOADING_FAILURE } from '../reducers/sitesActions'
import { SET_IS_LOADING, TESTS_LOADING_SUCCESS } from '../reducers/testsActions'

const sitesId = []

function* fetchSites(action) {
    yield action.payload.forEach(test => {
        if (sitesId.includes(test.siteId)) {
            return
        } else {
            sitesId.push(test.siteId)
        }
    })

    const responses = yield all(sitesId.map(test => {
        try {
            return call(localHostAPI.getSite, test)
        } catch (error) {
            return put({ type: SITE_LOADING_FAILURE, payload: error })
        }
    }))

    yield all(responses.map(response => {
        return put({ type: SET_SITES, payload: response.data })
    }))

    yield put({ type: SET_IS_LOADING, payload: false })
}


export function* sitesWatcher() {
    yield takeEvery(TESTS_LOADING_SUCCESS, fetchSites)
}