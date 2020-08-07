import React, { Component } from 'react'
import { actFetchDetailMovieAPI } from "./module/action"
import { connect } from "react-redux"
import Loading from "./../../../component/Loading/Loading"

import ModalVideo from 'react-modal-video'
import "../../../../node_modules/react-modal-video/css/modal-video.min.css"
import LichChieu from "../LichChieu"
import ThongTin from "./thongTin"
import DanhGia from './danhGia'

class DetailMovie extends Component {


    componentDidMount() {

        const id = this.props.match.params.id
        this.props.fetChDetailMovie(id)

        // console.log(this.props)
        // console.log(this.props.match.params.id)




    }

    renderHTML = () => {



        const { detailMovie } = this.props;
        console.log(detailMovie)
        // console.log(detailMovie.trailer)
        // if (detailMovie.trailer) {
        //     let arr = detailMovie.trailer.split('/')
        //     console.log('arr', arr)
        //     let videoId = arr.pop()
        //     console.log('videoId', videoId)
        // }

        console.log("thong tin rap chieu 1:",this.props.detailMovie.lichChieu)

        return (
            <div className="col-sm-8 detailMovie_items">
                <div className="row deTailMovie_img p-sm-5">
                    <div className="col-sm-7">
                        <img src={detailMovie.hinhAnh} />

                    </div>

                    <div className="col-sm-5">
                        <p>{new Date(detailMovie.ngayKhoiChieu).toLocaleDateString()}</p>

                        
                        <h3><i class="fa fa-film"></i> {detailMovie.tenPhim}</h3>

                        <p>{detailMovie.moTa}</p>
                        <p>{new Date(detailMovie.ngayKhoiChieu).toLocaleTimeString()}</p>


                        <div className="row">
                            <div className="col-sm-5">
                                <button className="btn btn-outline-danger">Mua vé</button>
                            </div>

                            <div className="col-sm-7">
                                <a id="video2" video-url={detailMovie.trailer}>

                                    <div>
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={detailMovie.trailer} onClose={() => this.setState({ isOpen: false })} />
                                        <button className="btn btn-outline-secondary" onClick={this.openModal}>Trailer</button>

                                    </div>
                                </a>
                            </div>
                        </div>



                    </div>
                </div>

                <div className="detail_Showtime">
                    <div>
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist ">
                                <a className="nav-item nav-link active" id="nav-home-tab1" data-toggle="tab" href="#nav-home1" role="tab" aria-controls="nav-home1" aria-selected="true">Lịch Chiếu</a>
                                <a className="nav-item nav-link" id="nav-profile-tab1" data-toggle="tab" href="#nav-profile1" role="tab" aria-controls="nav-profile1" aria-selected="false">Thông Tin</a>
                                <a className="nav-item nav-link" id="nav-contact-tab1" data-toggle="tab" href="#nav-contact1" role="tab" aria-controls="nav-contact1" aria-selected="false">Đánh Giá</a>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent1">
                            <div className="tab-pane fade show active" id="nav-home1" role="tabpanel" aria-labelledby="nav-home-tab">
                                <LichChieu />
                            </div>
                            <div className="tab-pane fade" id="nav-profile1" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <ThongTin detailMovie={detailMovie} />
                            </div>
                            <div className="tab-pane fade" id="nav-contact1" role="tabpanel" aria-labelledby="nav-contact-tab">

                            <DanhGia detailMovie={detailMovie} />

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        )
    }


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

       

        const { loading } = this.props;
        if (loading) return <Loading />
        return (

            <div className="container">
                <h3>DetailMovie</h3>
                <div className="row">
                    {this.renderHTML()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        detailMovie: state.detailMovieReducer.detailMovie,
        loading: state.detailMovieReducer.loadingDetailMovie
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetChDetailMovie: id => {
            dispatch(actFetchDetailMovieAPI(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie)