import {
    FETCH_A_CINEMA_REQUEST,
    FETCH_A_CINEMA_SUCCESS,
    FETCH_A_CINEMA_FAILED
}
    from "./constant"

import Axios from "axios"



export const actFetchACinemaAPI = (maHeThongRap) =>{
    return dispatch =>{
        dispatch(actFetchACinemaRequest())
        Axios({
            method: "GET",
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
        })
        .then(result =>{
            dispatch(actFetchACinemaSuccess(result.data))
           
            console.log("he thong rap",result.data)

            localStorage.setItem("listCinema",JSON.stringify(result.data));

        })
        .catch(err=>{
            dispatch(actFetchACinemaFailed(err))
        })
    }
}

export const actFetchACinemaRequest = () =>{
    return {
        type: FETCH_A_CINEMA_REQUEST
    }
}

export const actFetchACinemaSuccess = data =>{
    return {
        type: FETCH_A_CINEMA_SUCCESS,
        data
    }
}

export const actFetchACinemaFailed = err =>{
    return {
        type: FETCH_A_CINEMA_FAILED,
        err
    }
}