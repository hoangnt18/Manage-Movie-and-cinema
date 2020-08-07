import {POST_SIGNIN_REQUEST,
    POST_SIGNIN_SUCCESS,
    POST_SIGNIN_FAILED } from './constant'

    let inittialState = {
        user: {},
        loadingUser: false,
        errUser:null
    }

 const   userReducer = (state = inittialState, action) =>{
        switch(action.type){
            case POST_SIGNIN_REQUEST:{
                state.user = {}
                state.loadingUser = true
                state.errUser = null
                return {...state}
            }

            case POST_SIGNIN_SUCCESS:{
                state.user = action.data
                state.loadingUser = false
                state.errUser = null
                return {...state}
            }

            case POST_SIGNIN_FAILED:{
                state.user = {}
                state.loadingUser = false
                state.errUser = action.err
                return {...state}
            }
            default:
                return{...state}
        }
    }

    export default userReducer