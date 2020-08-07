import {FETCH_HETHONGRAP_REQUEST,
    FETCH_HETHONGRAP_SUCESS,
    FETCH_HETHONGRAP_FAILED } 
    from './contant'

    let inittialState = {
        listHeThongRap: [],
        loadingHeThongRap: false,
        errHeThongRap: null,
    }

    const heThongRapReducer = (state = inittialState,action) =>{
        switch(action.type){

            case FETCH_HETHONGRAP_REQUEST :{
                state.listHeThongRap = [];
                state.loadingHeThongRap = true;
                state.errHeThongRap = null;
                return{...state}
            }

            case FETCH_HETHONGRAP_SUCESS :{
                state.listHeThongRap = action.data;
                state.loadingHeThongRap = false;
                state.errHeThongRap = null;
                return{...state}
            }

            case FETCH_HETHONGRAP_FAILED :{
                state.listHeThongRap = [];
                state.loadingHeThongRap = false;
                state.errHeThongRap = action.err;
                return{...state}
            }

            default:
                return {...state}
        }
    }

    export default heThongRapReducer