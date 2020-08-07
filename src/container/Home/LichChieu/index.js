import React, { Component } from 'react'

import { actFetchListCinemaAPI } from "./module/action"
import { connect } from "react-redux"
import Cinema from "./../../../component/Cinema"
import DetailCinema from "../DetailACinema"






class LichChieu extends Component {

    componentDidMount() {

        const id = this.props

        this.props.fetchListCinema(id);
        console.log('Rap Chieu', this.props);

        console.log("id 1", id)

        

    }


    renderCinemaHTML = () => {
        const { listCinema } = this.props;
        console.log("lc", listCinema);

        const {detailMovie} = this.props

        if (listCinema && listCinema.length > 0) {
            return listCinema.map(item => {
                return (<Cinema cinema={item} key={item.maHeThongRap}  />)
            })
        }
    }


    render() {

        const {listCinema} = this.props
        console.log('listC',listCinema)


        return (
            <div>
                <h3>Lich Chieu</h3>
                <div className="row LichChieu_Cinema">
                    <div className="col-sm-4 Cinema" >
                        {this.renderCinemaHTML()}
                    </div>
                    <div className="col-sm-8 dayShow">
                        <DetailCinema  />
                    </div>
                </div>


            </div>
        )
    }
}

const mapStateToProp = state => {
    return {
        listCinema: state.listCinemaReducer.listCinema,
        
        
    }
}

const mapDispatchToProp = dispatch => {
    return {
        fetchListCinema: (id) => {
            dispatch(actFetchListCinemaAPI(id))
        }
    }
}


export default connect(mapStateToProp, mapDispatchToProp)(LichChieu)
