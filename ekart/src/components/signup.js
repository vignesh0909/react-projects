import React from 'react';
import {Button, FormGroup, FormControl, ControlLabel, Col, Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Transition} from 'react-router-dom';
import * as UserActions from '../actions/UserActions';
import * as ProductActions from '../actions/ProductActions';
import AjaxHelper from '../utilities/ajaxHelper';


 const mapStateToProps = (state) => {
    return {
        state:state
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onhandleSignup : (data, history) => {
            dispatch(UserActions.register(data, history));
        }
    }

}
export class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            match:true,
            invalid:false
        }
        this.handleSignup = this.handleSignup.bind(this);
        this.handleemail = this.handleemail.bind(this);
        this.handlepass = this.handlepass.bind(this);
    }
    
    handleemail(){
        this.setState({invalid:false});
    }
    handlepass(){
        this.setState({match:true});
    }
    
    handleSignup(e){
        e.preventDefault();
        console.log("handleSignup")
        console.log(this.state.invalid)
        this.setState({invalid:false}); 
        if(this.refs.password.value!=this.refs.password2.value){
            console.log("inside match if")
            this.setState({match:false});
        }
        else{
            
            console.log("inside else1")
            console.log(this.refs.password.value)
            console.log(this.refs.password2.value)
            this.setState({match:true});
        }
        let user = {
                    userName:this.refs.userName.value,
                    email:this.refs.email.value,
                    phone:this.refs.phone.value,
                    password:this.refs.password.value
                   };
        console.log(user);
        let findUser = AjaxHelper.finduser('http://10.82.181.77:8097/getUser?username='+user.email);
        console.log(findUser)
       if(findUser.length==0){
           this.props.onhandleSignup(AjaxHelper.registerUser('http://10.82.181.77:8097/registerUser', user));
            this.props.history.push('/login');
       }
            else{
                console.log("inside signup else2")
                this.setState({invalid:true})
            }
        }

    render(){

        return(<div>
            <center><div style={{"width":"40%","paddingTop":"30px","marginTop":"40px"}} className={"panel panel-default"} >
      <strong>Register</strong>
      <div id="divLogin" className={"bgImage panel-body"} >
    {/* Issue no:15a
   */}
   <Form onSubmit={this.handleSignup}>
        <FormGroup>
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" placeholder="Enter username" required ref="userName"/>
        </FormGroup>
        <FormGroup>
            <ControlLabel>Email address</ControlLabel>
            <FormControl type="email" placeholder="Enter email" onChange={this.handleemail}
             pattern="[A-Za-z]+@[a-z]+\.[a-z]{2,3}" required ref="email"/>
        </FormGroup>
        <FormGroup>
            <ControlLabel>Phone Number</ControlLabel>
            <FormControl type="text" placeholder="Enter phone" pattern="\d{10}" required ref="phone"/>
        </FormGroup>
        <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" placeholder="Password" onChange={this.handlepass}
            pattern="[A-Za-z]+[$&+,:;=?@#|'<>.^*()%!-]" required ref="password"/>
        </FormGroup>
        <FormGroup>
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl type="password" placeholder="Password"  onChange={this.handlepass} required ref="password2"/>
            <span className="alert-danger">{this.state.match? null : 'Password fields does not match'}</span>
        </FormGroup>
        <span className="alert-danger">{this.state.invalid? 'Email is already registered please enter different' : null}</span>
        <Button variant="dark" type="submit">
            Register
        </Button>
    </Form>
       </div></div></center></div>)
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);
