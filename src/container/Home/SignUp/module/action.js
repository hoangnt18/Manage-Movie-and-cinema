import {
    POST_SIGNUP_REQUEST,
    POST_SIGNUP_SUCCESS,
    POST_SIGNUP_FALIED,
} 
    from './constant'

    import Axios from "axios"


    export const actPostSignUpAPI = (userSignUp,history) =>{
        return dispatch =>{
            dispatch(actPostSignUpRequest())
            Axios({
                method:"POST",
                url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
                data:userSignUp
            })
            .then(result =>{
                dispatch(actPostSignUpSuccess(result.data))
                console.log("dang ky ", result.data)
                 if(result.data){
                     history.push("/sign-in")
                    alert("Dang ky thanh cong!!!")
                    
                 }
                
            }).catch(err=>{
                dispatch(actPostSignUpFalied(err))
                if(err){
                    alert("Tai Khoan hoac gmail da ton tai")
                }
            })
        }
    }

    export const actPostSignUpRequest = () =>{
        return {
            type:POST_SIGNUP_REQUEST
        }
    }

    export const actPostSignUpSuccess = data =>{
        return {
            type:POST_SIGNUP_SUCCESS,
            data
        }
    }

    export const actPostSignUpFalied = err =>{
        return {
            type:POST_SIGNUP_FALIED,
            err
        }
    }