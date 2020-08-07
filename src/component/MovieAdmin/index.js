import React, { Component } from 'react'


export default  class MovieAdmin extends Component {



    render() {
        const {movieAdmin} = this.props
        return (
            <div>
                <div className="card adminMovie" key={movieAdmin.maPhim}>
                <img className="card-img-top" src={movieAdmin.hinhAnh} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{movieAdmin.tenPhim}</h4>
                    <p className="card-text">{movieAdmin.maPhim}</p>
                <button className="btn btn-success">Update Movie</button>
                <button type="submit" className="btn btn-danger" onClick={()=>{this.props.deleteMovie(movieAdmin.maPhim)}} >Delete Movie</button>
                </div>
                </div>

            </div>
        )
    }
}




