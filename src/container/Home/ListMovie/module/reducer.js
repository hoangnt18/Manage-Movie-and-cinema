import {
    FETCH_LIST_MOVIE_REQUEST,
    FETCH_LIST_MOVIE_SUCCESS,
    FETCH_LIST_MOVIE_FAILED
} from "./constant"

let initialState = {
    listMovie: [],
    loadingListMovie: false,
    listMovieErr: null,
}

const listMovieReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_LIST_MOVIE_REQUEST: {
            state.listMovie = [];
            state.loadingListMovie = true;
            state.listMovieErr = null;


            return { ...state }
        }

        case FETCH_LIST_MOVIE_SUCCESS: {
            state.listMovie = action.data;
            state.loadingListMovie = false;
            state.listMovieErr = null;


            return { ...state }
        }

        case FETCH_LIST_MOVIE_FAILED: {
            state.listMovie = [];
            state.loadingListMovie = false;
            state.listMovieErr = action.err;


            return { ...state }
        }

        default:
            return { ...state }
    }
}

export default listMovieReducer