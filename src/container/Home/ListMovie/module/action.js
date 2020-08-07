import Axios from "axios"
import {
    FETCH_LIST_MOVIE_REQUEST,
    FETCH_LIST_MOVIE_SUCCESS,
    FETCH_LIST_MOVIE_FAILED
} from "./constant"


export const actFetchListMovieAPI = () =>{
    return dispatch =>{
        dispatch(actFetchListMovieRequest());
        Axios({
            method: "GET",
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`
        })
        .then(result =>{
            console.log(result.data);
            dispatch(actFetchListMovieSucess(result.data))
        })
        .catch(err =>{
            dispatch(actFetchListMovieFailed(console.log(err)))
        })

    }
}


export const actFetchListMovieRequest = () =>{
    return {
        type:FETCH_LIST_MOVIE_REQUEST
    }
}

export const actFetchListMovieSucess = (data) =>{
    return{
        type: FETCH_LIST_MOVIE_SUCCESS,
        data
    }
}

export const actFetchListMovieFailed = (err) =>{
    return {
        type:FETCH_LIST_MOVIE_FAILED,
        err
    }
}