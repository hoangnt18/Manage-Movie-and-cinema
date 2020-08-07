import React, { Component } from 'react'

export default class RapPhim extends Component {
    render() {
        const {rapPhim} = this.props;
        return (
            <div>
                <table className="table " >
                    <thead >
                        <td><p>{rapPhim.maCumRap}</p></td>
                        <td>{rapPhim.maHeThongRap}</td>
                        <td>{rapPhim.maRap}</td>
                        <td>{rapPhim.tenCumRap}</td>
                        <td>{rapPhim.tenHeThongRap}</td>
                       
                    </thead>
                </table>
            </div>
        )
    }
}
