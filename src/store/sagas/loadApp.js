import { takeEvery, put, call } from 'redux-saga/effects'
import { localHostAPI } from '../../API/localHostAPI'
import { FETCH_TESTS, SET_IS_LOADING, TESTS_LOADING_FAILURE, TESTS_LOADING_SUCCESS } from '../reducers/testsActions'

function* fetchTests() {
    yield put({ type: SET_IS_LOADING, payload: true })
    try {
        const response = yield call(localHostAPI.loadingApp)
        yield put({ type: TESTS_LOADING_SUCCESS , payload: response.data})
    } catch(error) {
        yield put({ type: TESTS_LOADING_FAILURE, payload: error})
        yield put({ type: SET_IS_LOADING, payload: false })
    }
}

export function* loadDashboardPage() {
    yield takeEvery(FETCH_TESTS, fetchTests)
}