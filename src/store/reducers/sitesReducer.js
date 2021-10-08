import { SET_SITES, SITE_LOADING_FAILURE } from './sitesActions'

const regExp = /^https:\/\/www.|^https:\/\/|^http:\/\//
const initialState = {
    sites: {},
    error: null
}



export const sitesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SITES:
            return {
                ...state,
                sites: {
                    ...state.sites,
                    [action.payload.id]: action.payload.url.replace(regExp, '') 
                }
            }
        case SITE_LOADING_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}