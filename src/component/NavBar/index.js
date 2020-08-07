import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom"
import ShowTime from "./../../container/Home/ShowTime/index"

import imgLogo from "./img/tix.jpg"
import imgLogin from "./img/images.png"




export default class NavBar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={imgLogo} />
                        {/* <img src="././../../../public/img/tix.jpg"/> */}
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/lich-chieu">Lịch chiếu<span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cum-rap">Cụm rạp</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Tin Tức</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Ứng dụng</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/sign-in">
                                    <span> <img src={imgLogin}/> Đăng nhập</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">
                                    <div className="input-group mb-3">
                                        <span><i className="fa fa-map-marker-alt" /></span>
                                        <select className="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                                            <option selected>Hồ Chí Minh</option>
                                            <option value={1}>Hà Nội</option>
                                            <option value={2}>Đà Nẵng</option>
                                            <option value={4}>Hải Phòng</option>
                                            <option value={5}>Biên Hòa</option>
                                            <option value={6}>Nha Trang</option>
                                            <option value={7}>Bình Dương</option>
                                            <option value={8}>Phan Thiết</option>
                                            <option value={8}>Hạ Long</option>
                                            <option value={8}>Cần Thơ</option>
                                            <option value={8}>Vũng Tàu</option>
                                        </select>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>
        )
    }
}
