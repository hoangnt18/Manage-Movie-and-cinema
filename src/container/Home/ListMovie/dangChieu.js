import React, { Component } from 'react'
import Movie from "./../../../component/Movie"






// import "../../../../node_modules/slick-carousel/slick/slick.css"
// import "../../../../node_modules/slick-carousel/slick/slick-theme.css"
// import "../../../../node_modules/slick-carousel/slick/slick.js"






export default class DangChieu extends Component {


    renderHTML = () => {
        const { listMovie } = this.props;
        console.log(listMovie);

        if (listMovie && listMovie.length > 0) {
            return listMovie.map(item => {
                return (
                    <div className="col-sm-3" key={item.maPhim} >

                        <Movie movie={item} />

                    </div>
                )
            })
        }
    }

    render() {

        return (
            <div>

                <h3>Dang Chieu</h3>
                <div className="row  listMovie_dangChieu">
                    
                    {this.renderHTML()}
                </div>





            </div>
        )
    }
}
