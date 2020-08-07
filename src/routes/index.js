import HomePage from "../container/Home/HomePage";
import ListMovie from "../container/Home/ListMovie";
import DashBoard from "../container/Admin/dashboard";
import DetailMovie from "../container/Home/DetailMovie"
import DetailACinema from "../container/Home/DetailACinema";
import CumRap from "../container/Home/CumRap";
import News from "../container/Home/News";


import SignIn from "../container/Home/SignIn";
import SignUp from "../container/Home/SignUp"

import AdminListMovie from "../container/Admin/AdminListMovie"
import AdminAddMovie from "../container/Admin/AdminAddMovie"
import AdminUpdateMovie from "../container/Admin/AdminUpdateMovie"
import AdminDeleteMovie from "../container/Admin/AdminDeleteMovie"


const routesHome = [
    {
        path:"/",
        exact:true,
        Component:HomePage,
    },

    {
        path:"/lich-chieu",
        exact:false,
        Component:ListMovie
    },

    {
        path:"/detail-movie/:id",
        exact:false,
        Component:DetailMovie
    },

    {
        path:"/detail-cinema/:id",
        exact:false,
        Component:DetailACinema
    },

    {
        path:"/cum-rap",
        exact:false,
        Component:CumRap
    },

    {
        path:"/news",
        exact:false,
        Component: News
    },
    {
        path:"/sign-in",
        exact:false,
        Component:SignIn
    },
    {
        path:"/sign-up",
        exact:false,
        Component:SignUp
    }


]

const routesAdmin = [
    {
        path:"/dashboard",
        exact:true,
        Component:DashBoard
    },

    {
        path:"/dashboard/list-movie",
        exact:false,
        Component:AdminListMovie
    },
    {
        path:"/dashboard/add-movie",
        exact:false,
        Component:AdminAddMovie
    },
    {
        path:"/dashboard/delete-movie",
        exact:false,
        Component:AdminDeleteMovie
    },
    {
        path:"/dashboard/update-movie",
        exact:false,
        Component:AdminUpdateMovie
    },


]



export {routesHome,routesAdmin}