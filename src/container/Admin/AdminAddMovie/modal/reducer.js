import {
    POST_A_MOVIE_REQUEST,
    POST_A_MOVIE_SUCCESS,
    POST_A_MOVIE_FALIED
}   from "./constant"


let initialState = {
    movieAdd : {},
    modvieAddLoading: false,
    movieAddErr: null
}

const movieAddReducer = (state = initialState ,  action) =>{
    switch(action.type){

        case POST_A_MOVIE_REQUEST:{
            state.movieAdd = {};
            state.modvieAddLoading = true;
            state.movieAddErr = null;

            return {...state}
        }

        case POST_A_MOVIE_SUCCESS:{
            state.movieAdd = action.data;
            state.modvieAddLoading = false;
            state.movieAddErr = null;

            return {...state}
        }


        case POST_A_MOVIE_FALIED:{
            state.movieAdd = {};
            state.modvieAddLoading = false;
            state.movieAddErr = action.err;

            return {...state}
        }

        default:
            return{...state}
    }
}


export default movieAddReducer