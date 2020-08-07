import React, { Component } from 'react'
import {actPostAMovieAPI} from "./modal/action"
import {connect} from "react-redux"


 class AdminAddMovie extends Component {

    constructor(props){
        super(props)
        this.state={
            values:{
                tenPhim: "",
                biDanh:"",
                trailer:"",
                hinhAnh:null,
                moTa:"",
                ngayKhoiChieu:"",
                maNhom:"GP01",
                danhGia:"",
            }

            
        }
    }

    handleThemPhim = event => {
        let {name,value} = event.target
        // console.log("hinh anh",this.state.values.hinhAnh = event.target.files[0])
        
        let hinhAnh = event.target.files[0]
        
        this.setState({
            values: {...this.state.values, [name]:value, hinhAnh: hinhAnh}

        })

        console.log("hinh anh", this.state.values.hinhAnh)



        console.log(name, value)
    }

    // handleImg = event =>{
    //     const hinhAnh = event.target.files[0]
    //     this.setState({
    //         values:{...this.state.values.hinhAnh}
            
    //     })
    //     console.log("hinh anh",this.state.values.hinhAnh)
    // }


    handleSubPhim = event =>{
        event.preventDefault()
        console.log(this.state.values)
        
        this.props.PostMovieAdd(this.state.values)
        
    }

    


    render() {      
        return (
            <div className="row container">
                
                <div className="col-md-6 container">
                     <h3>Add A Movie</h3>
                     <form className="mx-auto" onSubmit={this.handleSubPhim}>
                        <div className="form-group">
                            <label >Tên Phim</label>
                            <input type="text" name="tenPhim" id="tenPhim" className="form-control" placeholder="Nhập tên phim!!!" onChange={this.handleThemPhim}/>
                        </div>

                        <div className="form-group">
                            <label >Bí danh</label>
                            <input type="text" name="biDanh" id="biDanh" className="form-control" placeholder="Nhập Bí danh!!!" onChange={this.handleThemPhim} />
                        </div>

                        <div className="form-group">
                            <label>Trailer</label>
                            <input type="text" name="trailer" id="trailer" className="form-control" placeholder="Nhập Trailer!!!" onChange={this.handleThemPhim} />
                        </div>


                        <div className="form-group">
                            <label>Hình ảnh</label>
                            <input type="file" name="hinhAnh" id="hinhAnh" className="form-control-file"  onChange={this.handleThemPhim} />
                        </div>

                        <div className="form-group">
                            <label>Mô tả</label>
                            <input type="text" name="moTa" id="moTa" className="form-control" placeholder="Nhập Mô tả!!!" onChange={this.handleThemPhim}/>
                        </div>

                        <div className="form-group">
                            <label>Ngày khởi chiếu</label>
                            <input type="text" name="ngayKhoiChieu" id="ngayKhoiChieu" className="form-control" placeholder="Nhập Ngày khởi chiếu!!!" onChange={this.handleThemPhim} />
                        </div>

                        <div className="form-group">
                            <label>Đánh giá</label>
                            <input type="text" name="ngayKhoiChieu" id="ngayKhoiChieu" className="form-control" placeholder="Nhập Ngày khởi chiếu!!!" onChange={this.handleThemPhim}/>
                        </div>

                        <div className="form-group">
                            <label>Mã nhóm</label>
                            <input type="text" name="maNhom" id="maNhom" className="form-control" value="GP01" disabled onChange={this.handleThemPhim}/>
                        </div>

                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div> 
        )
    }
}


 const mapDispatchToProp = dispatch => {
    return {
        PostMovieAdd : movieAdd  =>{
            dispatch(actPostAMovieAPI(movieAdd ))
        }
    }
}


export default connect(null,mapDispatchToProp)(AdminAddMovie)



