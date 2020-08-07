import React, { Component } from 'react'
import {actPostSignUpAPI} from './module/action'
import {connect} from 'react-redux'

 class SignUp extends Component {
    constructor(props){
        super(props)
        this.state={
            values:{
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                email: "",
                soDt: "",
                maNhom: "GP01",
                maLoaiNguoiDung: "KhachHang",
            },
            errors:{
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                email: "",
                soDt: "",
                maNhom: "GP01",
                maLoaiNguoiDung: "KhachHang",
            },
            
                formValid:false,
                taiKhoanValid:false,
                matKhauValid:false,
                hoTenValid:false,
                emailValid:false,
                soDtValid:false,

        }
    }

    handleOnChange = event =>{
        let {name,value} = event.target
        this.setState({
            values:{...this.state.values, [name]:value}
           
        })
        console.log(name, value)
        
    }
    


    handleError = event =>{
        let {name,value} = event.target
        let {taiKhoanValid,matKhauValid,hoTenValid,emailValid,soDtValid} = this.state
        
        let mess = value === "" ? name +" khong duoc trong" : ""

        switch(name){
            case "matKhau":{
             matKhauValid =   mess !== "" ? false :true
             if(value && value.length < 4 ){
                matKhauValid = false;
                mess = "Phai nhieu hon 3 ki tu"
             }
                break;
            }
            case "taiKhoan":{
                taiKhoanValid = mess !== "" ?false : true
                break;
            }

            case "soDt":{
                soDtValid = mess !== "" ?false : true
                break;
            }

            case "hoTen":{
                hoTenValid = mess !== "" ?false : true
                break;
            }

            case "email":{
                emailValid = mess !== "" ? false : true
                if(value !== "" && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                    emailValid = false;
                    mess="email khong dung dinh dang" ; 
                }
            }
        }



        this.setState({
            errors:{...this.state.errors, [name]:mess },
            matKhauValid,
            taiKhoanValid,
            emailValid,
            hoTenValid,
            soDtValid
        },()=>
        {   this.validatioForm();
            console.log(this.state)
        })
    }

    validatioForm = ()=>{
        this.setState({
            formValid: this.state.matKhauValid && this.state.taiKhoanValid && this.state.emailValid && this.state.soDtValid && this.state.hoTenValid
        })

    }

    handleOnSubmit = event =>{
        event.preventDefault()
        console.log(this.state.values)  
        this.props.PostSignUp(this.state.values,this.props.history)
     }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3>Sign up</h3>
                    <div className="col-sm-6 mx-auto">
                        <form onSubmit={this.handleOnSubmit}>
                            <div className="form-group">
                                <label for="taiKhoan"> Tai Khoan</label>
                                <input type="text" name="taiKhoan" id="taiKhoan" className="form-control" value={this.state.values.taiKhoan} onChange={this.handleOnChange} onBlur={this.handleError} onKeyUp={this.handleOnChange} />
                                    {this.state.errors.taiKhoan !== "" ? <div className="alert alert-danger">{this.state.errors.taiKhoan}</div> : ""}
                                </div>

                            <div className="form-group">
                                <label for="matKhau">Mat Khau</label>
                                <input type="text" name="matKhau" id="matKhau" className="form-control" value={this.state.values.matKhau}  onChange={this.handleOnChange} onBlur={this.handleError} onKeyUp={this.handleOnChange} />
                                {this.state.errors.matKhau !== "" ? <div className="alert alert-danger">{this.state.errors.matKhau}</div> : ""}
                            </div>

                            <div className="form-group">
                                <label for="hoTen">Ho Ten</label>
                                <input type="text" name="hoTen" id="hoTen" className="form-control" value={this.state.values.hoTen}  onChange={this.handleOnChange}  onBlur={this.handleError} onKeyUp={this.handleOnChange} />
                                {this.state.errors.hoTen !== "" ? <div className="alert alert-danger">{this.state.errors.hoTen}</div> : ""}
                            </div>

                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" className="form-control" value={this.state.values.email}  onChange={this.handleOnChange} onBlur={this.handleError} onKeyUp={this.handleOnChange} />
                                {this.state.errors.email !== "" ? <div className="alert alert-danger">{this.state.errors.email}</div> : ""}
                            </div>

                            <div className="form-group">
                                <label for="soDt">So Dien Thoai</label>
                                <input type="number" name="soDt" id="soDt" className="form-control" value={this.state.values.soDt}  onChange={this.handleOnChange} onBlur={this.handleError} onKeyUp={this.handleOnChange} />
                                {this.state.errors.soDt !== "" ? <div className="alert alert-danger">{this.state.errors.soDt}</div> : ""}
                            </div>

                            <div className="form-group">
                                <label for="maNhom">Ma Nhom</label>
                                <input type="text" name="maNhom" id="maNhom" className="form-control" value="GP01" disabled  />
                           
                            </div>

                            <div className="form-group">
                                <label for="maLoaiNguoiDung">Ma Loai Nguoi Dung</label>
                                <input type="text" name="maLoaiNguoiDung" id="maLoaiNguoiDung" className="form-control" value="KhachHang" disabled  />
                           
                            </div>

                            <button type="submit" className="btn btn-success" disabled={!this.state.formValid}>Dang Ki</button>

                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}


 const mapDispatchToProp = dispatch =>{
    return{
        PostSignUp:( userSignUp,history) =>{
            dispatch(actPostSignUpAPI(userSignUp,history))
        }
    }
}

export default connect(null,mapDispatchToProp)(SignUp)