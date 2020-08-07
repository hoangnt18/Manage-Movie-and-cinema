import {
    DELETE_MOVIE_REQUEST,
    DELETE_MOVIE_SUCCESS ,
    DELETE_MOVIE_FAILED,
}  from "./constant"

import Axios from "axios"


export const actDeleteMovieAPI = maPhim =>{
    let accessToken = "";
    if(localStorage.getItem("UserAdmin")){
        accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    }
    return dispatch =>{
        dispatch(actDeleteMovieRequest())
        Axios({ 
            method:"DELETE",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
            headers:{
                Authorization:`Bearer ${accessToken}`
            }
            
        }).then(result=>{
            dispatch(actDeleteMovieSuccess(result.data))
            alert("You Deleted")
            window.location.reload()
        }).catch(err=>{
            dispatch(actDeleteMovieFailed(err))
        })
    }
}

export const actDeleteMovieRequest = () =>{
    return{
        type: DELETE_MOVIE_REQUEST
    }
}

export const actDeleteMovieSuccess = data =>{
    return{
        type: DELETE_MOVIE_SUCCESS,
        data
    }
}

export const actDeleteMovieFailed = err =>{
    return{
        type: DELETE_MOVIE_FAILED,
        err
    }
}