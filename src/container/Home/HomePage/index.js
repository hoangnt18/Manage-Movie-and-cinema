import React, { Component } from 'react'


import ModalVideo from 'react-modal-video'
import "../../../../node_modules/react-modal-video/css/modal-video.min.css"

import imgCarou1 from "./img/vin-dau-nhot-15840272645345.png"
import imgCarou2 from "./img/onward-15840276765820.jpg"

import ShowTime from "./../ShowTime"
import ListMovie from "./../ListMovie"
import CumRap from "../CumRap"
import News from "../News"





export default class HomePage extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }




    render() {
        return (
            <section className="tixCarousel">
                <div>
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                            <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <a id="video2" video-url="https://www.youtube.com/watch?v=vOUVVDWdXbo">
                                    <img src={imgCarou1} />
                                    <div>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='https://www.youtube.com/embed/vOUVVDWdXbo' onClose={() => this.setState({ isOpen: false })} />
                                    <button onClick={this.openModal}><i className="fa fa-play" /></button>
                                </div>
                                </a>

                            </div>
                            <div className="carousel-item">
                                <a id="video2" video-url="https://www.youtube.com/watch?v=lidO3bXELzU">
                                    <img src={imgCarou2} />
                                    <div>
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='https://www.youtube.com/embed/lidO3bXELzU' onClose={() => this.setState({ isOpen: false })} />
                                    <button onClick={this.openModal}><i className="fa fa-play" /></button>
                                </div>
                                </a>

                            </div>
                        </div>
                        <div>
                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <i className="fa fa-angle-left" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <i className="fa fa-angle-right" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="chooseTime">
                        <div className="btn-group chooseTime_item">
                            <button type="button" className="btn btn-light">Phim</button>
                            <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
                                <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                <a className="dropdown-item" href="#">Bà Hoàng Nói Dối</a>
                                <a className="dropdown-item" href="#">Bạn Âm 3</a>
                                <a className="dropdown-item" href="#">Dấu Ấn Vô C</a>
                                <a className="dropdown-item" href="#">Bloodshot(C18)</a>
                            </div>
                        </div>
                        <div className="btn-group chooseTime_item">
                            <button type="button" className="btn btn-light">Rạp</button>
                            <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
                                <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                <a className="dropdown-item" href="#">Vui lòng chọn phim</a>
                            </div>
                        </div>
                        <div className="btn-group chooseTime_item">
                            <button type="button" className="btn btn-light">Ngày xem</button>
                            <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
                                <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                <a className="dropdown-item" href="#">Vui lòng chọn phim và rạp</a>
                            </div>
                        </div>
                        <div className="btn-group chooseTime_item">
                            <button type="button" className="btn btn-light">Suất chiếu</button>
                            <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
                                <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                <a className="dropdown-item" href="#">Vui lòng chọn phim,rạp và ngày xem</a>
                            </div>
                        </div>
                        <div className="btn-group chooseTime_item chooseTime_item1 ">
                            <button>Mua vé ngay</button>
                        </div>
                    </div>
                </div>

                <ListMovie />
                <CumRap />
                <News />
                
            </section>

        )
    }
}



