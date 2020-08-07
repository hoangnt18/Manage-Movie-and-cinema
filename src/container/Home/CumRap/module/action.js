import {FETCH_HETHONGRAP_REQUEST,
    FETCH_HETHONGRAP_SUCESS,
    FETCH_HETHONGRAP_FAILED } 
    from './contant'

    import Axios from 'axios'

    export const actFetchListHeThongRapAPI = maHeThongRap  =>{
        return dispatch =>{
            dispatch(actFetchListHeThongRapRequest())
            Axios({
                method: "GET",
                url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`
            })
            .then(result =>{
                dispatch(actFetchListHeThongRapSuccess(result.data))
                console.log('he thong rap CGV',result.data)
            })
            .catch(err =>{
                dispatch(actFetchListHeThongRapFailed(err))
            })

        }
    }


    export const actFetchListHeThongRapRequest = () =>{
        return {
            type:FETCH_HETHONGRAP_REQUEST
        }
    }

    export const actFetchListHeThongRapSuccess = data =>{
        return {
            type:FETCH_HETHONGRAP_SUCESS,
            data
        }
    }


    export const actFetchListHeThongRapFailed = err =>{
        return {
            type:FETCH_HETHONGRAP_FAILED,
            err
        }
    }