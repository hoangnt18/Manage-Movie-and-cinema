import {FETCH_DETAIL_MOVIE_REQUEST,
    FETCH_DETAIL_MOVIE_SUCCESS,
    FETCH_DETAIL_MOVIE_FAILED,}
    from "./constant"

    let initialState = {
        detailMovie:{},
        loadingDetailMovie:false,
        errDetailMovie:null,
    }   


    const detailMovieReducer =(state =initialState, action ) =>{
        switch(action.type){

            case FETCH_DETAIL_MOVIE_REQUEST:{
                state.detailMovie = {};
                state.loadingDetailMovie = true;
                state.errDetailMovie = null;

                return {...state}
            }

            case FETCH_DETAIL_MOVIE_SUCCESS:{
                state.detailMovie =action.data;
                state.loadingDetailMovie = false;
                state.errDetailMovie = null;

                return {...state}
            }

            case FETCH_DETAIL_MOVIE_FAILED:{
                state.detailMovie = {};
                state.loadingDetailMovie = false;
                state.errDetailMovie = action.err;

                return {...state}
            }




            default:
                return {...state}
        }
    }



    export default detailMovieReducer

    