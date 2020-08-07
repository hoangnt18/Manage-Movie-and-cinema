import {
    POST_A_MOVIE_REQUEST,
    POST_A_MOVIE_SUCCESS,
    POST_A_MOVIE_FALIED
}   from "./constant"

import Axios from "axios"


export const actPostAMovieAPI = movieAdd  =>{

    return dispatch =>{
        dispatch(actPostAMovieRequest())
        Axios({
            method:"POST",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
            data:movieAdd 
        }).then(result =>{
            dispatch(actPostAMovieSuccess(result.data))
            alert("Thêm phim thành công !!!")
        }).catch(err =>{
            dispatch(actPostAMovieFalied(err))
        })
    }
}

export const actPostAMovieRequest = () =>{
    return {
        type :POST_A_MOVIE_REQUEST
    }
}

export const actPostAMovieSuccess = data =>{
    return {
        type: POST_A_MOVIE_SUCCESS,
        data
    }
}

export const actPostAMovieFalied = err =>{
    return {
        type: POST_A_MOVIE_FALIED,
        err
    }
}