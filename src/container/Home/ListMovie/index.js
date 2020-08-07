import React, { Component } from 'react'
import { actFetchListMovieAPI } from "./module/action"
import { connect } from "react-redux"
import Movie from '../../../component/Movie';
import DangChieu from "./dangChieu"
import Loading from "./../../../component/Loading/Loading.js"

import Slider from "react-slick"

class ListMovie extends Component {
    

    componentDidMount() {
        let soTrang =3 ; 
        this.props.FetchData(soTrang);
    
        console.log(this.props)
    }

    renderHTML = () => {
        const { listMovie } = this.props
        console.log("listMovie",listMovie)
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true,
            autoplay:false,
            
       
        }


        return (
            <section className="showTime container-fluid" id="showTime">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Đang chiếu</a>


                        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Sắp Chiếu</a>

                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active container-fluid" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <Slider {...settings}>
                            <DangChieu listMovie={listMovie} />
                        </Slider>


                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">Sắp Chiếu</div>

                </div>
            </section>

        )


    }



    render() {


        const {loading} = this.props;
        if(loading) return <Loading />

        return (
            <div className="container">
                <h3>ListMovie</h3>
                <div className="row">
                    
                    {this.renderHTML()}
                </div>
            </div>
        )
    }
}


const mapStateToProp = state => {
    return {
        listMovie: state.listMovieReducer.listMovie,
        loading:state.listMovieReducer.loadingListMovie
    }
}

const mapDispatchToProp = dispatch => {
    return {
        FetchData: soTrang => {
            dispatch(actFetchListMovieAPI(soTrang))

        },


    }
}

export default connect(mapStateToProp, mapDispatchToProp)(ListMovie)


