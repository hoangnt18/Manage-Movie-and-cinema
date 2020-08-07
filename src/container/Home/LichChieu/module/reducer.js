import {
    FETCH_LIST_CINEMA_REQUEST,
    FETCH_LIST_CINEMA_SUCCESS,
    FETCH_LIST_CINEMA_FALIED,

} from "./constant"

let initialState = {
    listCinema: [],
    listCinemaLoading: false,
    listCinemaErr: null
}

const listCinemaReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_CINEMA_REQUEST: {
            state.listCinema = [];
            state.listCinemaLoading = true;
            state.listCinemaErr = null;
            return { ...state }
        }

        case FETCH_LIST_CINEMA_SUCCESS: {
            state.listCinema = action.data;
            state.listCinemaLoading = false;
            state.listCinemaErr = null;
            return { ...state }
        }

        case FETCH_LIST_CINEMA_FALIED: {
            state.listCinema = [];
            state.listCinemaLoading = false;
            state.listCinemaErr = action.err;
            return { ...state }
        }

        default:
            return { ...state }
    }


}

export default listCinemaReducer 