import { SET_IS_LOADING, TESTS_LOADING_FAILURE, TESTS_LOADING_SUCCESS } from './testsActions'


const initialState = {
    tests: [],
    isLoading: false,
    error: null
}

export const testsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case TESTS_LOADING_SUCCESS:
            return {
                ...state,
                tests: [...action.payload]
            }
        case TESTS_LOADING_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
