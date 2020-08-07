import {
    DELETE_MOVIE_REQUEST,
    DELETE_MOVIE_SUCCESS ,
    DELETE_MOVIE_FAILED,
}  from "./constant"

let initialState = {
    deleteMovie:{},
    loadingDeleteMovie:false,
    errDeleteMovie:null,
}

const deleteMoVieReducer = (state = initialState, action) =>{
    switch(action){

        case DELETE_MOVIE_REQUEST:{
            state.deleteMovie = "";
            state.loadingDeleteMovie = true;
            state.errDeleteMovie = null;
            
            return {...state}
        }

        case DELETE_MOVIE_SUCCESS:{
            state.deleteMovie = action.data;
            state.loadingDeleteMovie = false;
            state.errDeleteMovie = null;
            
            return {...state}
        }

        case DELETE_MOVIE_FAILED:{
            state.deleteMovie = "";
            state.loadingDeleteMovie = false;
            state.errDeleteMovie = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default deleteMoVieReducer