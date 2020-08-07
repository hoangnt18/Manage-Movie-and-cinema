import React, { Component } from 'react'
import {NavLink} from "react-router-dom"


export default class Cinema extends Component {
    
     saveMaheThong =() =>{
        const {cinema} = this.props;
        console.log(1234);

        localStorage.setItem("listLogo",JSON.stringify(cinema.maHeThongRap));
        window.location.reload();

    }



    render() {
        const {cinema} = this.props;
        console.log("cccinema",cinema)



        return (
            <div>
                <table>
                        <thead>
                           
                               <tr key={cinema.maHeThongRap} onClick={this.saveMaheThong}>
                               <td><img src={cinema.logo} /></td>
                                <td><h6>{cinema.tenHeThongRap}</h6></td>
                               </tr>
                        </thead>
                    </table>
            </div>
        )
    }
}
