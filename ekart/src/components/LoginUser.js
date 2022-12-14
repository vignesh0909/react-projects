import React from 'react';
import { connect } from 'react-redux';
import * as UserActions from '../actions/UserActions';
import AjaxHelper from '../utilities/ajaxHelper';
import { Link } from 'react-router-dom';
import { mergetocart } from '../actions/ProductActions';


const mapStateToProps = (state) => {
  console.log("mapStateToProps loginUser")
  return {
    state: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (data, history) => {
      dispatch(UserActions.Login(data, history));
    },
    mergetcart: (data) => {
      dispatch(mergetocart(data));
    }
  }
}

export class LoginUser extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let data = {
      _id: this.refs.email.value,
      password: this.refs.password.value
    };
    let userdata = AjaxHelper.loginUser('http://10.82.181.77:8097/loginUser', data);
    if (userdata) {
      console.log("logged in")
      console.log(userdata)
      this.props.onLogin(userdata);
      if (localStorage.getItem("cart")) {
        var arr = []
        arr = JSON.parse(localStorage.getItem("cart"));
        arr.forEach((c) => { this.props.mergetcart({ id: data._id, product: c }) })
      }
      setTimeout(() => { localStorage.clear() }, 10000);
      window.emitter.emit('connection');
      // Issue no:1c
      this.props.history.push('/recommendation');
    }
    else {
      alert("invalid username or password");
    }
  }
  render() {

    return (
      <div>
        <style>{
          `
    .form-signin
{
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading, .form-signin .checkbox
{
  margin-bottom: 10px;
}
.form-signin .checkbox
{
  font-weight: normal;
}
.form-signin .form-control
{
  position: relative;
  font-size: 16px;
  height: auto;
  padding: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.form-signin .form-control:focus
{
  z-index: 2;
}
.form-signin input[type="text"]
{
  margin-bottom: -1px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.form-signin input[type="password"]
{
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.account-wall
{
  margin-top: 20px;
  padding: 40px 0px 20px 0px;
  background-color: #f7f7f7;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
.login-title
{
  color: #555;
  font-size: 18px;
  font-weight: 400;
  display: block;
}
.profile-img
{
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.need-help
{
  margin-top: 10px;
}
.new-account
{
  display: block;
  margin-top: 10px;
}
    `
        }
        </style>

        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-md-offset-4">
              <h1 className="text-center login-title">Sign in to continue to Shopping</h1>
              <div className="account-wall">
                <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                  alt="" />
                <form className="form" onSubmit={this.handleSubmit}>
		  <input className="form-control" ref="email" type="text" placeholder="Email" required/>
		  <input className="form-control" ref="password" type="password" placeholder="Password" required/>
	          <button className="btn btn-primary" type="submit">Signin</button>
		</form>
              </div>
            
              <Link to="/signup" className="text-center new-account">Create an account</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);
