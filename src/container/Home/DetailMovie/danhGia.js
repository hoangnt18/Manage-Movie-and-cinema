import React, { Component } from 'react'

export default class DanhGia extends Component {
    render() {
        return (
            <div>
                <h3>Đánh Giá</h3>

                <div className="input-group input-group-lg mx-auto container">
                <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg "><i class="fa fa-user"></i></span>
                    </div>
                    <input type="text" className="form-control mx-auto" disabled   />
                    <span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span>
                </div>
                
            </div>
        )
    }
}



