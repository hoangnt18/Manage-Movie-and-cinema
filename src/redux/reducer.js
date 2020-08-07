import { combineReducers } from "redux";
import listMovieReducer from "./../container/Home/ListMovie/module/reducer"
import detailMovieReducer  from "../container/Home/DetailMovie/module/reducer"
import listCinemaReducer  from "../container/Home/LichChieu/module/reducer"
import cinemaReducer from "../container/Home/DetailACinema/module/reducer"
import heThongRapReducer  from "../container/Home/CumRap/module/reducer"
import userReducer from "../container/Home/SignIn/module/reducer"
import userSignUpReducer from "../container/Home/SignUp/module/reducer"
import deleteMoVieReducer from "../container/Admin/AdminListMovie/module/reducer"
import movieAddReducer from "../container/Admin/AdminAddMovie/modal/reducer"



const rootReducer = combineReducers({
    listMovieReducer,
    detailMovieReducer,
    listCinemaReducer,
    cinemaReducer,
    heThongRapReducer,
    userReducer,
    userSignUpReducer,
    deleteMoVieReducer,
    movieAddReducer

  
   

});
export default rootReducer