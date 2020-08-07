import React, { Component } from 'react'

export default class ThongTin extends Component {
    render() {
        const {detailMovie} = this.props
        return (
            <div>
                <h3>Thong Tin</h3>
                <div className="row container">
                    <div className="col-sm-7">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <td>Tên phim:</td> 
                                    <td>{detailMovie.tenPhim}</td>
                                </tr>

                                <tr>
                                    <td>Ngày công chiêu</td> 
                                    <td>{detailMovie.ngayKhoiChieu}</td>
                                </tr>

                            </thead>
                        </table>
                    </div>

                    <div className="col-sm-5">
                        <h4>Nội Dung</h4>
                        <p>{detailMovie.moTa}</p>
                    </div>
                     
                </div>
            </div>
        )
    }
}
