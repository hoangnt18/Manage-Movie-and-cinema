import React, { Component } from 'react'
import {actFetchListMovieAPI} from "../../Home/ListMovie/module/action"
import {connect} from "react-redux"
import MovieAdmin from "../../../component/MovieAdmin"
import {actDeleteMovieAPI} from "./module/action"
import Loading from "../../../component/Loading/Loading"


 class AdminListMovie extends Component {

    componentDidMount(){

        this.props.fetchListMovieAdmin()
    }

    deleteMovie = maPhim =>{
        console.log(maPhim)
        this.props.deleteMovieAdmin(maPhim)
       
    }

    renderHTML = () =>{
        const{listMovie} = this.props
        console.log('list movie admin', listMovie)
        if(listMovie && listMovie.length >0){
            return listMovie.map((item, index) =>{
                return (
                    <div className="col-sm-4" key={index}>
                        <MovieAdmin   movieAdmin={item}  deleteMovie={this.deleteMovie}/> 
                        {/* thang con cua no(movieAdmin) nen su dung callback function 
                        de truyen cai ham cho thang cho */}
                    </div>
                )
            })
        }
        
    }

    render() {
        const {loading} = this.props;
        if(loading) return <Loading />

        return (
            <div>
                <h3>Admin List Movie</h3>
                <div className="row container-fluid">
                    {this.renderHTML()}
                </div>
               
            </div>
        )
    }
}

const mapStateToProp = state =>{
    return {
        listMovie: state.listMovieReducer.listMovie,
        loading: state.listMovieReducer.loadingDeleteMovie
        
    }
}

const mapDispatchToProp = dispatch =>{
    return {
        fetchListMovieAdmin:() =>{
            dispatch(actFetchListMovieAPI())
        },
        deleteMovieAdmin:maPhim =>{
            dispatch(actDeleteMovieAPI(maPhim))
        },

    }
}

export default connect(mapStateToProp,mapDispatchToProp)(AdminListMovie)


