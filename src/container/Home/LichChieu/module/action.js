import {
    FETCH_LIST_CINEMA_REQUEST,
    FETCH_LIST_CINEMA_SUCCESS,
    FETCH_LIST_CINEMA_FALIED,


} 
    from "./constant"
    import Axios from "axios"

    export const actFetchListCinemaAPI = () =>{
        return dispatch =>{
            dispatch(actFetchListCinemaRequest())
            Axios({
                method:"GET",
                url:`http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`
            })
            .then(result=>{
                dispatch(actFetchListCinemaSuccess(result.data))
                // result.data.map(item=>{
                //     console.log("aaatung")
                //     console.log("he thong",item)
                // })
                console.log("RP",result.data)
            })
            .catch(err=>{
                dispatch(actFetchListCinemaFailed(err))
            })
        }
    }

    export const actFetchListCinemaRequest = () =>{
        return {
            type: FETCH_LIST_CINEMA_REQUEST
        }
    }

    export const actFetchListCinemaSuccess = (data) =>{
        return {
            type: FETCH_LIST_CINEMA_SUCCESS,
            data
        }
    }

    export const actFetchListCinemaFailed = (err) =>{
        return {
            type: FETCH_LIST_CINEMA_FALIED,
            err
        }
    }






    