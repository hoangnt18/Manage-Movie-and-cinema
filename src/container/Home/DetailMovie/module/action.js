import {FETCH_DETAIL_MOVIE_REQUEST,
    FETCH_DETAIL_MOVIE_SUCCESS,
    FETCH_DETAIL_MOVIE_FAILED,}
    from "./constant"

    import Axios from "axios"

    export const actFetchDetailMovieAPI = (id)=>{
        return dispatch =>{
            dispatch(actFetchDetailMovieRequest());
            Axios({
                method:"GET",
                url:`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
            })
            .then(result =>{
                dispatch(actFetchDetailMovieSuccess(result.data))
                // console.log("chi tiet phim",result.data)
            })
            .catch(err=>{
                dispatch(actFetchDetailMovieFailed(err))
            })
        }
    }

    export const actFetchDetailMovieRequest = () =>{
        return{
            type:FETCH_DETAIL_MOVIE_REQUEST
        }
    }

    export const actFetchDetailMovieSuccess = (data) =>{
        return {
            type:FETCH_DETAIL_MOVIE_SUCCESS,
            data
        }
    }

    export const actFetchDetailMovieFailed = (err) =>{
        return {
            type:FETCH_DETAIL_MOVIE_FAILED,
            err
        }
    }

