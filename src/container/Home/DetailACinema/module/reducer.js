import {
    FETCH_A_CINEMA_REQUEST,
    FETCH_A_CINEMA_SUCCESS,
    FETCH_A_CINEMA_FAILED
}
    from "./constant"

    let initialState = {
        cinema:[],
        cinemaLoading:false,
        cinemaErr:null
    }

   const cinemaReducer = (state = initialState, action)=>{
        switch(action.type){
            case FETCH_A_CINEMA_REQUEST:{
                state.cinema = [];
                state.cinemaLoading = true;
                state.cinemaErr = null;
                return {...state}
            }

            case FETCH_A_CINEMA_SUCCESS:{
                state.cinema = action.data;
                state.cinemaLoading = false;
                state.cinemaErr = null
                return {...state}
            }

            case FETCH_A_CINEMA_FAILED:{
                state.cinema = [];
                state.cinemaLoading = false;
                state.cinemaErr = action.err
                return {...state}
            }

            default:
                return{...state}
        }


    }

    export default cinemaReducer