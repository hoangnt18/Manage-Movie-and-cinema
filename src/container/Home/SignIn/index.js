import React, { Component } from 'react'
import {connect} from 'react-redux'
import {actPostSignInAPI} from './module/action'
import { Link } from 'react-router-dom'


 class SignIn extends Component {

  constructor(props){
    super(props)
    this.state={
      taiKhoan: "",
      matKhau: "",
    }
  }

  handleOnChange = e =>{
    const {name,value} =e.target
    this.setState({
      [name]:value
      
    })
    console.log(name,value)
  }

  handOnSubmit = e =>{
    e.preventDefault();
    console.log(this.state)
    this.props.PostSignIn(this.state, this.props.history)
  }

  errorSignIn = () =>{
    const {errUser}= this.props
    if(errUser){
      return(
      <div className="alert alert-danger">{errUser.response.data}</div>
      )
    }
  }


  render() {
    return (
      <div className="container">
     
        <div className="row">
            
            <div className="col-sm-6 mx-auto">
            <h3>Sign In</h3>
            {this.errorSignIn()}
            <form  onSubmit={this.handOnSubmit} >
              <div className="form-group">
                <label  >Tai Khoan</label>
                <input type="text" name="taiKhoan" id="taiKhoan" value={this.state.taiKhoan} className="form-control" onChange={this.handleOnChange} />
              </div>

            <div className="form-group">
              <label  >Mat Khau</label>
              <input type="password" name="matKhau" id="matKhau" value={this.state.matKhau} className="form-control" onChange={this.handleOnChange} />
            </div>

              <button  type="submit"  className="btn btn-success">Dang Nhap</button>
               <span><Link to="/sign-up">Dang ki</Link></span>
               
          </form>
            </div>
        </div>

      </div>
    )
  }
}

  const mapStateToProps = state =>{
    return{
      errUser: state.userReducer.errUser
    }
  }

  const mapDispatchToProp = dispatch =>{
    return {
      PostSignIn: (user,history)=>{
        dispatch(actPostSignInAPI(user,history))
      }
    }
  }

  export default connect(mapStateToProps,mapDispatchToProp)(SignIn)

