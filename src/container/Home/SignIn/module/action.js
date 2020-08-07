import {POST_SIGNIN_REQUEST,
    POST_SIGNIN_SUCCESS,
    POST_SIGNIN_FAILED } from './constant'

    import Axios from 'axios'


    export const actPostSignInAPI = (user,history) =>{
        return dispatch => {
            dispatch(actPostSignInRequest())
            Axios({
                method:"POST",
                url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
                data:user
            })
            .then(result =>{
                dispatch(actPostSignInSuccess(result.data))
                localStorage.setItem("UserAdmin",JSON.stringify(result.data))

                if(result.data.maLoaiNguoiDung === "QuanTri"){
                    history.push("/dashboard/list-movie")
                }
                else{
                    history.push("/")
                }
                
            })
            .catch(err =>{
                dispatch(actPostSignInFailed(err))
            })
        }
    }

    export const actPostSignInRequest = () =>{
        return{
            type: POST_SIGNIN_REQUEST
        }
    }

    export const actPostSignInSuccess = data =>{
        return{
            type: POST_SIGNIN_SUCCESS,
            data
        }
    }

    export const actPostSignInFailed = err =>{
        return{
            type: POST_SIGNIN_FAILED,
            err
        }
    }