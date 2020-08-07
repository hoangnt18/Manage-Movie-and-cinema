import React, { Component } from 'react'
import { Link } from "react-router-dom"



export default class Movie extends Component {

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
        const { movie } = this.props
        return (
            <Link to={`/detail-movie/${movie.maPhim}`}> 
            
                <div className="showTime_items">

                    <img src={movie.hinhAnh} />
                    <div className="showTime_text">
                        <h5>{movie.tenPhim}</h5>

                    </div>
                    <div className="showTime_button ">
                        <button className="btn btn-danger w-100">Mua Vé</button>
                    </div>
                    <div className="showTime_black">


                    </div>
                </div>
            </Link>



        )
    }
}
