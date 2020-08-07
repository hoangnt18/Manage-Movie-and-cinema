import React from 'react'
import { Route , Redirect } from "react-router-dom";
import imgLogo from "./img/tix.jpg"
import {NavLink} from "react-router-dom"
import Navbar from "../component/NavBar"


function AdminLayout(props) {
    return (
        <div>
                    <NavLink className="navbar-brand admin_img" to="/">
                        <img src={imgLogo} />
                    </NavLink>
                    <div className="admin_content row container-fluid">
                    <div className="col-sm-3">
                        <ul >
                            <li>
                                <NavLink to="/dashboard/list-movie">List Movie</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/add-movie">Add A Movie</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/delete-movie">Delete A Movie</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/update-movie">Get Up Date Movie</NavLink>
                            </li>
                        </ul>
                        
                    </div>

                    <div className="col-sm-9">
                        {props.children}
                    </div>
                </div>

        </div>
    )
}

export default function AdminTemplate({ Component, ...props }) {
    return (
        <Route {...props}
            render={(propsComponent) => {
                if(localStorage.getItem("UserAdmin")){
                    return(
                        <AdminLayout >
                            <Component {...propsComponent} />
                        </AdminLayout>
                    )
                }
                return <Redirect to="/sign-in" />
            }}
               
        />
    )
}
