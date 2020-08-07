import React, { Component } from 'react'
import {actFetchListHeThongRapAPI} from "./module/action"
import {connect} from 'react-redux'
import {actFetchListCinemaAPI} from "../LichChieu/module/action"
import Cinema from '../../../component/Cinema'
import Loading from "./../../../component/Loading/Loading.js"


 class CumRap extends Component {


    componentDidMount(){
        
        if(localStorage.getItem("listLogo")){
          let maHeThongRap =  JSON.parse(localStorage.getItem("listLogo"))
            this.props.fetchListHeThongRap(maHeThongRap)
            console.log('list cinema Rap',this.props)
            console.log('ma he thong rap trong Cum rap',maHeThongRap)
        }

        // this.props.fetchListCinema();
    }


    componentWillMount(){

        this.props.fetchListCinema();
    }



    renderHeThongRap = () =>{
        const {listHeThongRap} = this.props
        console.log('lst He thong rap trong Cum rap ',listHeThongRap)
        if(listHeThongRap && listHeThongRap.length > 0){
            return listHeThongRap[0].lstCumRap.map(item =>{
                return(
                    <div key={item.maCumRap}>
                        
                        {/* <p>ten he thong rap : {item.tenHeThongRap}</p>
                        <p>ma he thong rap: {item.maHeThongRap}</p> */}
                        <p>dia chi rap: {item.diaChi}</p>
                        <p>ten cum rap: {item.tenCumRap} </p>
                        
                        
                    </div>
                )
            })
        }
    }

    renderListCinema = () =>{
        const {listCinema} = this.props
        if(listCinema && listCinema.length >0){
           return listCinema.map(item => {
               return (
                   <div className="listLogo" key={item.maHeThongRap}>
                       <Cinema cinema={item}  />
                   </div>
               )
           })
        }
    }

    renderListPhim = () =>{
        const {loading} = this.props;
        if(loading) return <Loading />
        
        const {listHeThongRap} = this.props
        if(listHeThongRap && listHeThongRap.length > 0){
            return listHeThongRap[0].lstCumRap.map(item =>{
                return item.danhSachPhim.map(item =>{
                    return(
                        <div key={item.maPhim} className="listLogo">
                            
                            <img src={item.hinhAnh} />
                            <p>ten Phim: {item.tenPhim} </p>
                            
                            
                        </div>
                    )
                    })
                

            })
        }

    }

    renderSuatChieu = () =>{

        const {listHeThongRap} = this.props
        if(listHeThongRap && listHeThongRap.length > 0){
            return listHeThongRap[0].lstCumRap.map(item =>{
                return item.danhSachPhim.map(item =>{
                    return item.lstLichChieuTheoPhim.map(item => {
                        return(
                            <div key={item.maRap} >
                                
                                
                            <p>Ngay khoi chieu: {new Date(item.ngayChieuGioChieu).toLocaleDateString()}</p>
                            <p>Gio khoi chieu: {new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</p>
                            
                            </div>
                        )
                        })
                    
                    })


            })
        }
    }






    render() {
        console.log('he thong rap trong Cum rap',this.props.listHeThongRap)
       
        return (
            <div>
                <h3>Cum Rap</h3>
                <div className="CumRap_content container">

                
                
                


                    <div className="d-flex " >
                        <div className="w-20">
                            {this.renderListCinema()}
                        </div>

                    <div className="w-70" className="listSuatChieu">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Danh Sách Phim</th>
                                <th>Suất Chiếu</th>
                                <th>Hệ Thống Rạp</th>
                            </tr>
                            <tr >
                            <td>{this.renderListPhim()}</td>
                            <td>{this.renderSuatChieu()}</td>
                            <td>{this.renderHeThongRap()}</td>
                            
                            
                            </tr>
                        </thead>
                    </table>
                    </div>

                    </div>
                </div>
                
                
               
            </div>
        )
    }
}


const mapStateToProp = state =>{
    return{
        listHeThongRap:state.heThongRapReducer.listHeThongRap,
        listCinema:state.listCinemaReducer.listCinema
    }
}


const mapDispatchToProp = dispatch =>{
    return{
        fetchListHeThongRap: (maHeThongRap) =>{
            dispatch(actFetchListHeThongRapAPI(maHeThongRap))
        },

        fetchListCinema: () =>{
            dispatch(actFetchListCinemaAPI())
        }

    }
}


export default connect(mapStateToProp, mapDispatchToProp)(CumRap)
