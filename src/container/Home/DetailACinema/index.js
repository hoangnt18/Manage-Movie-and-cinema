import React, { Component } from 'react'
import {actFetchACinemaAPI } from './module/action'
import {connect} from 'react-redux'

 class DetailACinema extends Component {

    componentDidMount(){
        
        if(localStorage.getItem("listLogo")){
          let maHeThongRap =  JSON.parse(localStorage.getItem("listLogo"))
            this.props.fetchListCinema(maHeThongRap)
            console.log('list cinema Rap',this.props)
           
        }
    }


    renderHTML = () =>{
        const {cinema} = this.props;
        console.log("rap chieu phim",cinema)

        if(cinema && cinema.length > 0){
            return cinema.map(item =>{
                // console.log('danh sach rap',item.danhSachRap.maRap)
                return (

                       <tr key={item.maCumRap} > 
                            {/* <td>{item.danhSachRap.maRap}</td>
                            <td>{item.danhSachRap.tenRap}</td> */}
                            <td>{item.maCumRap}</td>
                            <td>{item.tenCumRap}</td>
                            <td>{item.diaChi}</td>
                            <td>
                                <button className="btn btn-danger">Mua Vé</button>
                            </td>
                       </tr>

                      
                    
                    
                )
            })
        }


    }


    render() {
        return (
            <div>
                <h3>Detail A Cinema</h3>
                <div className="row" >
                    <div className="col-sm-12">
                    <table className="table table-bordered">
                        <thead>

                        </thead>
                        <tbody  >
                            <div  className="listCinema">
                            <tr>
                            {/* <th>Mã Rạp</th>
                            <th>Tên Rạp</th> */}
                            <th>Mã Cụm Rạp</th>
                            <th>Tên Cụm Rạp</th>
                            <th>Địa Chỉ</th>
                            </tr>

                                {this.renderHTML()}
                            </div>
                        </tbody>
                    </table>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProp = state =>{
    return{
        cinema: state.cinemaReducer.cinema
    }
}


const mapDispatchToProps = dispatch =>{
    return{
        fetchListCinema : maHeThongRap =>{
            dispatch(actFetchACinemaAPI(maHeThongRap))
        }
    }
}

export default connect(mapStateToProp,mapDispatchToProps)(DetailACinema)

